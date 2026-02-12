import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
//import { NbDialogService } from '@nebular/theme/components/dialog/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { PagnationRequest } from '../../../models/pagination.request';
import { PagnationRequestWithId } from '../../../models/paginationWithId.request';
import { QstCustomModel } from '../../../models/Quest/QuestCustom.model';
import { QuestionModel } from '../../../models/Quest/Question.model';
import { SurveyModel } from '../../../models/Survey/Survey.model';
import { QuestionService } from '../../../services/Quest.service';
import { SurveyService } from '../../../services/Survey.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';
@Component({
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrls: ['./edit-survey.component.scss']
})
export class EditSurveyComponent implements OnInit {
  dir = "ltr";

  constructor(
    private formBuilder: FormBuilder,
    private QService: QuestionService,

    private surveyService: SurveyService,
    private router: Router,
    private route: ActivatedRoute,

    private toastrService: ToastrService,
    private translate: TranslateService,
    private _detector: ChangeDetectorRef,
//private dialogService: NbDialogService,


  ) {
    if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
    this.router.navigateByUrl('/auth');
  }
  SurveyForm: FormGroup;


  QstModel: QuestionModel[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  submitted = false;
  isSubmitted :boolean= false;

  isLoading = false;


totalRecords: number = 0;
index:number=0;
searchModel: PagnationRequestWithId;
QstsID:string[]=[];
QstsName:string[]=[];

Id: string;
test:boolean=true;
TypeOfGrant:number=0;
@ViewChild(MatSort) sort: MatSort;
   

@ViewChild('QstTitleFilter') QstTitleFilter!: ElementRef;
@ViewChild('ServiceFilter') ServiceFilter!: ElementRef;


pageSizeOptions = environment.DEFAULT_PAGE_SIZE_OPTIONS;
displayedColumns: string[] = [
  "Service",
  "Question", 
  "QuestDesc",
 // "NationalSource",
  "AnswerType",
  "ischecked",
///"Check",
  //"HafezaSource",
  //"Phone",

  //"Mobil",
 // "Notes",
 // "createdDate",
//  "actions",
  //"actions1",
];
dataSource: MatTableDataSource<{
  questText: string;
  serviceNames:string[];

  questDesc: string;

  answerType: string;

 // phone: string;
 // mobil: string;

  sortable: boolean;
 ischecked:boolean;

}>;
  ngOnInit() {
    this.initForm();
    this.route.params.subscribe((params) => {
      this.Id = params["id"];

    });

    //this.Id='83ecc536-d270-4d5f-87c5-f4bcf95ec7d3';
   // this.getRoyalGrantInfoById();
    this.searchModel = {
      id:this.Id,
      PageNumber: 1,
      PageSize: environment.DEFAULT_PAGE_SIZE,
    };

    
  this.getSurveyInfoById();

    this.search();
    this._detector.markForCheck()

  }


  search(page?: PageEvent) {
    if (page) {
      this.searchModel.id=this.Id;
      this.searchModel.PageNumber = page.pageIndex + 1;
      this.searchModel.PageSize = page.pageSize;

      //this.searchModel.PageNumber = 1;
      //this.searchModel.PageSize = 10; 
    }
    else
    {
      this.searchModel.id=this.Id;

      this.searchModel.PageNumber = 1;
      this.searchModel.PageSize = 10; 
    }
    this.QService.GetQuestionsInSurvey(this.searchModel).subscribe((res) => {
      this.QstModel = res.entity.entities;
      this.totalRecords = res.entity.totalRecords;
    //  this._detector.markForCheck()
    this.dataSource = new MatTableDataSource(this.QstModel);

      this._detector.markForCheck()

    });
  }
  QstFilteredLst: QuestionModel[] = [];

  getSurveyInfoById() {
    this.surveyService.getById(this.Id).subscribe((res) => {
      this.surveyModel = res.entity;
      this.index=this.surveyModel.questionIds.length;
this.QstsID=this.surveyModel.questionIds;
      this.bindForm();
    });

  }
  surveyModel: SurveyModel;

  //empId:string;
  bindForm() {
    this.SurveyForm.controls["id"].setValue(this.surveyModel.id);
    this.SurveyForm.controls["surveyName"].setValue(this.surveyModel.surveyName);
    this.SurveyForm.controls["surveyDesc"].setValue(this.surveyModel.surveyDesc);
    this.SurveyForm.controls["fromDate"].setValue(this.surveyModel.fromDate);
    this.SurveyForm.controls["toDate"].setValue(this.surveyModel.toDate);
    this.fromDate = this.surveyModel.fromDate;
    this.toDate = this.surveyModel.toDate;
   // this.surveyModel.questionIds;
  }
  fromDate:Date;
  toDate:Date;

objectiveIds:string[];
  initForm() {
    this.SurveyForm = this.formBuilder.group({
      id:[null],
      surveyName: ["", [Validators.required]],
      surveyDesc:[""],
      fromDate: ["", [Validators.required]],
      toDate: ["", [Validators.required]],

     QstData: this.formBuilder.array([]),

     
    });
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort; // Connect sort after view initialization
  }

  sortData(sort: MatSort): void {
    const data: Array<{
      questText: string;
      serviceNames:string[];

      questDesc: string;
    
      answerType: string;

      sortable: boolean;
      ischecked:boolean;

    }> = this.dataSource.data.slice();

    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      if (!a.sortable || !b.sortable) {
        return 1;
      } else {
        let isAsc: boolean = sort.direction === 'asc';
        switch (sort.active) {
          case 'Question':
            return this.compare(
              a.questText.toLowerCase(),
              b.questText.toLowerCase(),
              isAsc
            );
          case 'QuestDesc':
            return this.compare(
              a.questDesc.toLowerCase(),
              b.questDesc.toLowerCase(),
              isAsc
            );
            case 'Service':
              return this.compare(
                a.serviceNames.toString().toLowerCase(),
                b.serviceNames.toString().toLowerCase(),
                isAsc
              );
         case 'AnswerType':
              return this.compare(
                a.answerType.toLowerCase(),
                b.answerType.toLowerCase(),
                isAsc
              );
            
          default:
            return 0;
        }
      }
    });

    this.dataSource = new MatTableDataSource<{
      questText: string;
      questDesc: string;
      serviceNames:string[];

      answerType: string;
      sortable: boolean;
      ischecked:boolean;

    }>(this.dataSource.data);
  }

  compare(a: any, b: any, isAsc: boolean): number {
    if (a < b) {
      return -1 * (isAsc ? 1 : -1);
    } else if (a > b) {
      return 1 * (isAsc ? 1 : -1);
    } else {
      return 0 * (isAsc ? 1 : -1);
    }
  }


  applyFilter(event: Event) {
    const filterValues = {
      questText: this.QstTitleFilter.nativeElement.value,
      serviceNames:this.ServiceFilter.nativeElement.value,
     
   
      sortable: true,
    ischecked:false
 

    };
   // this.dataSource.data=  this.dataSource.data.filter(x=>x.nationalId!=257125366)

    this.dataSource.filterPredicate = (
      data: { name: string;
        questText: string;
        questDesc: string;
        serviceNames:string[];

        answerType: string;
        sortable: boolean;
        ischecked:false

      },
      filter: string
    ) => {
      const searchText = JSON.parse(filter);
      if (data.questText == ""&&data.serviceNames==null
      //&&data.questDesc ==null&&data.answerType==""
      ) 
      {
        return true; 
      }
      return (
       ( data.questText
         .toLowerCase()
          .includes(searchText.questText.toLowerCase())
          && data.serviceNames.toString().includes(searchText.serviceNames.toLowerCase())

   
        
   
               )
             
               
               );

    };
  //this.dataSource.data=  this.dataSource.data.filter(x=>x.ischecked==false)

    this.dataSource.filter = JSON.stringify(filterValues);

   if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  checkedrow:boolean;
  checkedrows:boolean[]=[];
  qstFilteredLst: QstCustomModel[] = [];

  check(values,id,questText,questDesc,answerType)
  {
    //this.owner[id].ischecked=true;
    let o=new  QstCustomModel();

    if(values.currentTarget.checked==true)
    {
      this.checkedrow=true;



     this.checkedrows.push(true);
    console.log("CheckedRowsssss"+this.checkedrows)
    console.log("checkBoxEvent  "+values.currentTarget.checked,id);

    this.submitted = true;
    this.isSubmitted =false;

    this.index++;
//this.OwnerId=id;
//this.search();
console.log(this.index);
o.id=id;
o.questText=questText;
o.questDesc=questDesc;
o.answerType=answerType;
o.ischecked=true;
o.sortable=true;
//this.ownersFilteredLst.push(o);
this.QstsID.push(o.id);
this.QstsName.push(o.questText);
console.log("Qsts Id is "+this.QstsID);

console.log("QstsName is "+this.QstsName);
console.log(o);
console.log(this.qstFilteredLst);
this.returnValueByelementid(id)==true;

//this.dataSource = new MatTableDataSource(this.ownersFilteredLst);

    }
    else
    {
      this.checkedrow=false;

      o.ischecked=false;
      this.checkedrows.pop();
      console.log("CheckedRowsssss"+this.checkedrows)

o.sortable=false;
      console.log("checkBoxEvent  "+values.currentTarget.checked,id);

      //this.submitted = true;
      //this.isSubmitted =false;
  
      this.index--;
  //this.OwnerId=id;
  //this.search();
  console.log(this.index);
  /*o.id=id;
  o.name=name;
  o.hafezaId=hafezaId;
  o.nationalId=nationalId;*/
  this.qstFilteredLst.pop();
  this.QstsID.pop();
  this.QstsName.pop();

  console.log("Qst Id is "+this.QstsID);
  
  console.log(o);
  //console.log(this.ownersFilteredLst);

  console.log("Qst name  "+this.QstsName);
  this.returnValueByelementid(id)==false;

      } 
      //this.OwnersName.join('\n');

    
  }
  returnValueByelementid(id)
  {
    if((this.QstsID.find(x=>x==id)!=null)
||( this.QstModel.find(x=>x.id==id&&x.ischecked==true)))
//if(this.qstFilteredLst.find(x=>x.id==id))
return true;
else
return false;
  }
  onSubmit() {
    this.submitted = true;
    this.isSubmitted = true;
    if (this.SurveyForm.invalid) {
      return;
    }
    const surveyModel = this.SurveyForm.value;
    let model = {
      id:this.Id,
      surveyName: surveyModel.surveyName,
      surveyDesc: surveyModel.surveyDesc,
fromDate:surveyModel.fromDate,
      toDate: surveyModel.toDate,
    
      QuestionIds:surveyModel.QstData,
 

      
    };

//fdfdf

//dfdf
model.id=this.Id
model.QuestionIds=this.QstsID;
const isWhitespaceString = str => !/\S/.test(str)
if( isWhitespaceString(model.surveyName)==true)
this.toastrService.danger("يجب إدخال بيانات الاستبيان لإتمام عملية الحفظ","خطأ");
else
{
    this.surveyService.updateSurvey(model).subscribe( {
      next: (res) => {
        this.toastrService.Update(EntityNames.Survey);
  

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Survey';

        this.router.navigateByUrl(returnUrl);      },

        error: (err) => {

     
          this.toastrService.danger(err.error.error,"خطأ");
    
          this.submitted = false;
          this.isSubmitted = false;
         }

    });
  }

  }
 // currentselectedOwner:OwnerCustomModel;
OwnerId:string;
  addToGrant(id:string,questText:string,questDesc:string,answerType:string)
  {
    this.submitted = true;
    this.isSubmitted =false;
    let o=new  QstCustomModel();

    this.index++;
//this.OwnerId=id;
//this.search();
console.log(this.index);
o.id=id;
o.questText=questText;
o.questDesc=questDesc;
o.answerType=answerType;
this.qstFilteredLst.push(o);
this.QstsID.push(o.id);
console.log("Qst Id is "+this.QstsID);

console.log(o);
console.log(this.qstFilteredLst);



  }
  ShowAdd()
  {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/PlanParts/add/'+22;


    this.router.navigateByUrl(returnUrl);
  }
  get fc() {
    return this.SurveyForm.controls;
  }


  name:string;
  /*
  showOwners() {
    this.name = 'Survey Questions are ';
    let title =  this.translate.get("Questions", { entity: name }).toPromise();
    let body =  this.translate.get("DeleteMessage", { entity: name }).toPromise();
    
    this.dialogService
      .open(ConfirmDialogComponent, {
        context: {
          title: `${title}`,
          body: `${body}?`,
        },
      })
   
  }*/
  get QstData() {
    return this.QstData.controls["QstData"] as FormArray;
  }
}
