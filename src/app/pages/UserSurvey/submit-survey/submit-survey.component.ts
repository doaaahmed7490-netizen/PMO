import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { PagnationRequest } from '../../../models/pagination.request';
import { PagnationRequestWithId } from '../../../models/paginationWithId.request';
import { QuestionModel } from '../../../models/Quest/Question.model';
import { SurveyModel } from '../../../models/Survey/Survey.model';
import { SurveyResponseModel } from '../../../models/Survey/Surveyresponse.mode';
import { QuestionService } from '../../../services/Quest.service';
import { SurveyService } from '../../../services/Survey.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';
import { SurveyExceptionDialogComponent } from '../../Survey/survey-exception-dialog/survey-exception-dialog.component';

@Component({
  selector: 'app-submit-survey',
  templateUrl: './submit-survey.component.html',
  styleUrls: ['./submit-survey.component.scss']
})
export class SubmitSurveyComponent  implements OnInit {
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
    private dialogService: NbDialogService,
    private http: HttpClient
//private dialogService: NbDialogService,


  ) {}
  SurveyForm: FormGroup;


  QstModel: QuestionModel[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  submitted = false;
  isSubmitted :boolean= false;

  isLoading = false;


totalRecords: number = 0;
index:number=0;
searchModel: PagnationRequestWithId;
searchModel1: PagnationRequest;

QstsID:string[]=[];
QstsName:string[]=[];
QstRespone:number[]=[];

Id: string;
test:boolean=true;
TypeOfGrant:number=0;
@ViewChild(MatSort) sort: MatSort;
surveyModel: SurveyModel;

ipAddress:string;
IsSubmitBefore:boolean;
  ngOnInit() {
    this.isSubmitted=false;
    this.initForm();
    this.route.params.subscribe((params) => {
      this.Id = params["id"];

  

    /*this.surveyService.getIPAddress().subscribe((res:any)=>{  
      this.ipAddress=res.ip;  
console.log("IP Address="+this.ipAddress);
   this.surveyService.CheckIfIPAddreSubmitSurveyOrNot(this.Id,res.ip).subscribe((res) => {
      this.IsSubmitBefore=res;
      if(this.IsSubmitBefore==false)
      {*/
        this.isSubmitted=false;

        this.getSurveyInfoById();
console.log("Questions");
 //  this.GetQuestions();
      this.GetListSurvey();  
    });
     // console.log("IsSubmittedBefore="+res);
     /* }
      else
      {

        this.isSubmitted=true;
        this.Message="عفواً تم المشاركة فى التصويت على الإستبيان سابقاً";
        console.log("IsSubmittedBefore="+res);
  this.surveyService.getById(this.Id).subscribe( {
          next: (res) => {
            this.surveyName=res.entity.surveyName;
          }*/
//        })
  //    }
   // });
  //});

/*if(this.IsSubmitBefore==true)
this.Message="عفواً تم المشاركة فى التصويت على الإستبيان سابقاً";
else
{*/


//}
//});

  //  });
    console.log("IIIP"+this.surveyService.getIpCliente());

    this.http.get<any>('https://geolocation-db.com/json/').subscribe(

      (res) => {
   
  console.log("Res"+res);
      });
/*  var json = 'http://ipv4.myexternalip.com/json';
   $http.get(json).then(function(result) {
    console.log(result.data.ip)
},  function(e) {
   alert("error");
});*/



   // this.getRoyalGrantInfoById();
    this.searchModel = {
      id:this.Id,
      PageNumber: 1,
      PageSize: environment.DEFAULT_PAGE_SIZE,
    };
    this.searchModel1 = {
      PageNumber: 1,
      PageSize: 1000
    };
    
//    this.getSurveyInfoById();
  //  this.GetQuestions();
//this.GetListSurvey();  

   // this.GetQuestions();
    this._detector.markForCheck()

  }

loading:boolean=false;
  getSurveyInfoById() {

 /*   this.surveyService.CheckIfIPAddreSubmitSurveyOrNot(this.Id,this.ipAddress).subscribe((res) => {
      this.IsSubmitBefore=res;
      console.log("IsSubmittedBefore="+this.IsSubmitBefore);

  
if(this.IsSubmitBefore==false)
{*/
    this.surveyService.getByIdForUser(this.Id).subscribe( {
      next: (res) => {
        this.GetQuestions();
        this.isSubmitted=false;

        this.surveyModel = res.entity;
        this.surveyName=this.surveyModel.surveyName;
        
        //+"  "+this.ipAddress;
       // this.GetQuestions();

        this.surveyDesc=this.surveyModel.surveyDesc;
        this.index=this.surveyModel.questionIds.length;
  this.QstsID=this.surveyModel.questionIds;
      },

        // else
        error: (err) => {
          this.isSubmitted=true;

         this.surveyService.getById(this.Id).subscribe( {
          next: (res) => {
            this.surveyName=res.entity.surveyName;
          this.Message= err.error.error;

          }
          
        });
         this.isSubmitted = true;
        // this.Message= err.error.error;
      
          }
    
    });
 /* }
  else
{
  this.surveyService.getById(this.Id).subscribe( {
    next: (res) => {
      this.surveyName=res.entity.surveyName;
    }
  });
  this.isSubmitted = true;

  this.Message="عفواً تم المشاركة فى التصويت على الإستبيان سابقاً11";
}*/
   // });
  /* }

  else
  {
   
     this.Message="عفواً تم المشاركة فى التصويت على الإستبيان سابقاً";
     console.log("Message Here1")

  }
});*/
  }
  //empId:string;

  bindForm() {
    this.SurveyForm.controls["id"].setValue(this.surveyModel.id);
    this.SurveyForm.controls["surveyName"].setValue(this.surveyModel.surveyName);
    this.SurveyForm.controls["surveyDesc"].setValue(this.surveyModel.surveyDesc);
   // this.surveyModel.questionIds;
  }   
  surveyName:string;
  
  surveyDesc:string;
  selectChangeHandler(value: any) { 
    this.Id = value.target.value; 
    console.log("This.SurveyId="+this.Id);
   this.getSurveyInfoById();
 this.GetQuestions();

  

   } 
  GetQuestions() {
    //this.Id='7687cb1b-1c04-4a5a-be36-d1e573514d78'

    //this.Id='83ecc536-d270-4d5f-87c5-f4bcf95ec7d3';
    /*this.route.params.subscribe((params) => {
      this.Id = params["id"];
    this.surveyService.getIPAddress().subscribe((res:any)=>{  
      this.ipAddress=res.ip;  
      console.log("This IP Address22=  "+this.ipAddress);
    this.surveyService.CheckIfIPAddreSubmitSurveyOrNot(this.Id,this.ipAddress).subscribe((res) => {
      this.IsSubmitBefore=res;
      console.log("IsSubmittedBefore22="+this.IsSubmitBefore);

  if(this.IsSubmitBefore==false)
  {*/
    this.searchModel.id=this.Id;
      this.searchModel.PageNumber = 1;
      this.searchModel.PageSize = 100; 
    
    this.surveyService.GetQuestionsBySurvey(this.searchModel).subscribe((res) => {
      this.QstModel = res.entity.entities;
      this.totalRecords = res.entity.totalRecords;
    //  this._detector.markForCheck()

      this._detector.markForCheck()

    });
 /*
  }
});
});
});*/
}

  GetListSurvey() {
  
      this.searchModel1.PageNumber = 1;
      this.searchModel1.PageSize = 100; 
    
    this.surveyService.searchSurveys(this.searchModel1).subscribe((res) => {
      this.SurveyLst = res.entity.entities;
      this.totalRecords = res.entity.totalRecords;
    //  this._detector.markForCheck()

      this._detector.markForCheck()

    });
  }
  SurveyLst: SurveyModel[] = [];

  QstFilteredLst: QuestionModel[] = [];

  initForm() {
   this.SurveyForm = this.formBuilder.group({
     id:[""],
     /* surveyName: ["", [Validators.required]],
      surveyDesc:[""],
      fromDate: ["", [Validators.required]],
      toDate: ["", [Validators.required]],
*/
     QstData: this.formBuilder.array([]),

     responseData: this.formBuilder.array([]),
     
    });
  }
  surveymodel:SurveyResponseModel;
  surveymodelLst:SurveyResponseModel[]=[]

  
  onItemChangeRatingPrecentage(id,value){
    let o=new  SurveyResponseModel();

    console.log(" Value is : ", value ,"Question Id: ",id);

    if(value=="five")
    {
      (this.QstsID.indexOf(id) != -1);
{
      this.QstsID.splice(this.QstsID.indexOf(id), 1);

      this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}
if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}//o.SurveyId=this.Id;
o.qstId=id;
//o.response=value;
o.response=20;

this.surveymodelLst.push(o);
    //  this.QstsID.pop(id);
      this.QstRespone.push(value)
    this.QstsID.push(id);
    this.QstRespone.push(value)
    console.log(" Value is : ", value ,"Question Id: ",id);

    console.log("QstsID",this.QstsID);

    console.log("QstRespone",this.QstRespone);
    console.log("SurveymodelLst",this.surveymodelLst);

    }
  
    else if (value=="twentyfive")
    {
      (this.QstsID.indexOf(id) != -1);
{

      this.QstsID.splice(this.QstsID.indexOf(id), 1);

     // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}
if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}
//o.SurveyId=this.Id;
o.qstId=id;
//o.response=value;
o.response=40;
this.surveymodelLst.push(o);
    //  this.QstsID.pop(id);
      this.QstRespone.push(value)
    this.QstsID.push(id);
    this.QstRespone.push(value)
    console.log(" Value is : ", value ,"Question Id: ",id);

    console.log("QstsID",this.QstsID);

    console.log("QstRespone",this.QstRespone);
    console.log("SurveymodelLst",this.surveymodelLst);

    }
    else if (value=="fifty")
    {
      (this.QstsID.indexOf(id) != -1);
{

      this.QstsID.splice(this.QstsID.indexOf(id), 1);

     // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}

if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}
//o.SurveyId=this.Id;
o.qstId=id;
o.response=60;

this.surveymodelLst.push(o);
    //  this.QstsID.pop(id);
      this.QstRespone.push(value)
    this.QstsID.push(id);
    this.QstRespone.push(value)
    console.log(" Value is : ", value ,"Question Id: ",id);

    console.log("QstsID",this.QstsID);

    console.log("QstRespone",this.QstRespone);
    console.log("SurveymodelLst",this.surveymodelLst);

    }
    else if (value=="seventyfive")
    {
      (this.QstsID.indexOf(id) != -1);
{

      this.QstsID.splice(this.QstsID.indexOf(id), 1);

     // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}

if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}
//o.SurveyId=this.Id;
o.qstId=id;
o.response=80;

this.surveymodelLst.push(o);
    //  this.QstsID.pop(id);
      this.QstRespone.push(value)
    this.QstsID.push(id);
    this.QstRespone.push(value)
    console.log(" Value is : ", value ,"Question Id: ",id);

    console.log("QstsID",this.QstsID);

    console.log("QstRespone",this.QstRespone);
    console.log("SurveymodelLst",this.surveymodelLst);

    }
    else 
    //if (value=="seventyfive")
    {
      (this.QstsID.indexOf(id) != -1);
{

      this.QstsID.splice(this.QstsID.indexOf(id), 1);

     // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}

if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}
//o.SurveyId=this.Id;
o.qstId=id;
o.response=100;

this.surveymodelLst.push(o);
    //  this.QstsID.pop(id);
      this.QstRespone.push(value)
    this.QstsID.push(id);
    this.QstRespone.push(value)
    console.log(" Value is : ", value ,"Question Id: ",id);

    console.log("QstsID",this.QstsID);

    console.log("QstRespone",this.QstRespone);
    console.log("SurveymodelLst",this.surveymodelLst);

    }

 }
  onItemChange(id,value){
    let o=new  SurveyResponseModel();

    console.log(" Value is : ", value ,"Question Id: ",id);

    if(value==1)
    {
      (this.QstsID.indexOf(id) != -1);
{
      this.QstsID.splice(this.QstsID.indexOf(id), 1);

      this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}
if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}//o.SurveyId=this.Id;
o.qstId=id;
//o.response=value;
o.response=20;

this.surveymodelLst.push(o);
    //  this.QstsID.pop(id);
      this.QstRespone.push(value)
    this.QstsID.push(id);
    this.QstRespone.push(value)
    console.log(" Value is : ", value ,"Question Id: ",id);

    console.log("QstsID",this.QstsID);

    console.log("QstRespone",this.QstRespone);
    console.log("SurveymodelLst",this.surveymodelLst);

    }
  
    else if (value==2)
    {
      (this.QstsID.indexOf(id) != -1);
{

      this.QstsID.splice(this.QstsID.indexOf(id), 1);

     // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}
if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}
//o.SurveyId=this.Id;
o.qstId=id;
//o.response=value;
o.response=40;
this.surveymodelLst.push(o);
    //  this.QstsID.pop(id);
      this.QstRespone.push(value)
    this.QstsID.push(id);
    this.QstRespone.push(value)
    console.log(" Value is : ", value ,"Question Id: ",id);

    console.log("QstsID",this.QstsID);

    console.log("QstRespone",this.QstRespone);
    console.log("SurveymodelLst",this.surveymodelLst);

    }
    else if (value==3 ||value==4 ||value==5)
    {
      (this.QstsID.indexOf(id) != -1);
{

      this.QstsID.splice(this.QstsID.indexOf(id), 1);

     // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}

if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}
//o.SurveyId=this.Id;
o.qstId=id;
if(value==3)
o.response=60;
else if(value==4)
o.response=80;
else
o.response=100;
this.surveymodelLst.push(o);
    //  this.QstsID.pop(id);
      this.QstRespone.push(value)
    this.QstsID.push(id);
    this.QstRespone.push(value)
    console.log(" Value is : ", value ,"Question Id: ",id);

    console.log("QstsID",this.QstsID);

    console.log("QstRespone",this.QstRespone);
    console.log("SurveymodelLst",this.surveymodelLst);

    }
   /* else   if(value==2)
    {
    this.QstsID.push(id);
    this.responseData.push(value)
    console.log(" Value is : ", value ,"Question Id: ",id);
    }
    else   if(value==3)
    {
    this.QstsID.push(id);
    this.responseData.push(value)
    console.log(" Value is : ", value ,"Question Id: ",id);
    } else   if(value==4)
    {
    this.QstsID.push(id);
    this.responseData.push(value)
    console.log(" Value is : ", value ,"Question Id: ",id);
    }
    else  
    {
    this.QstsID.push(id);
    this.responseData.push(value)
    console.log(" Value is : ", value ,"Question Id: ",id);
    }*/
    //console.log("QstsID",this.QstsID);
 }
 onItemChangeYesNo(id,value){
  let o=new  SurveyResponseModel();
  o.qstId=id;
    console.log(" Value is : ", value );
  
    if(value==100)
    {
    if  (this.surveymodelLst.indexOf(id) != -1)
  {
  //  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  
      this.QstsID.splice(this.QstsID.indexOf(id), 1);
  
      this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
      console.log("100000");
  }
  if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
  {
    this.surveymodelLst.pop();
  
    this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
    console.log("1111111111");
  
  }
  
  //this.surveymodelLst.pop();
  //o.SurveyId=this.Id;
  o.qstId=id;
  o.response=100;
  this.surveymodelLst.push(o);
    //  this.QstsID.pop(id);
      this.QstRespone.push(value)
    this.QstsID.push(id);
    this.QstRespone.push(value)
    console.log(" Value is : ", value ,"Question Id: ",id);
  
    console.log("QstsID",this.QstsID);
  
    console.log("QstRespone",this.QstRespone);
    console.log("SurveymodelLst",this.surveymodelLst);
  
    }
  else
  if(value==0)
  {
    if  (this.surveymodelLst.indexOf(id) != -1)
  {
    //this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  
    this.QstsID.splice(this.QstsID.indexOf(id), 1);
  
    this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
    console.log("0");
  
  }
  if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
  {
    this.surveymodelLst.pop();
  
    this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
    console.log("000");
  
  }
  
  //o.SurveyId=this.Id;
  o.qstId=id;
  o.response=0;
  this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);
  
  console.log("QstsID",this.QstsID);
  
  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);
  
  }
  /*let o=new  SurveyResponseModel();
o.qstId=id;
  console.log(" Value is : ", value );

  if(value==100)
  {
  if  (this.surveymodelLst.indexOf(id) != -1)
{

    this.QstsID.splice(this.QstsID.indexOf(id), 1);

    this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
    console.log("100000");
}
if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}

o.qstId=id;
o.response=value;
this.surveymodelLst.push(o);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }
else
if(value==0)
{
  if  (this.surveymodelLst.indexOf(id) != -1)
{

  this.QstsID.splice(this.QstsID.indexOf(id), 1);

  this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
  console.log("0");

}
if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("000");

}

o.qstId=id;
o.response=value;
this.surveymodelLst.push(o);
  this.QstRespone.push(value)
this.QstsID.push(id);
this.QstRespone.push(value)
console.log(" Value is : ", value ,"Question Id: ",id);

console.log("QstsID",this.QstsID);

console.log("QstRespone",this.QstRespone);
console.log("SurveymodelLst",this.surveymodelLst);

}*/
}

onItemChangeLikeDisLike(id,value){
  let o=new  SurveyResponseModel();
o.qstId=id;
  console.log(" Value is : ", value );

  if(value=="like")
  {
  if  (this.surveymodelLst.indexOf(id) != -1)
{
//  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);

    this.QstsID.splice(this.QstsID.indexOf(id), 1);

    this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
    console.log("100000");
}
if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}

//this.surveymodelLst.pop();
//o.SurveyId=this.Id;
o.qstId=id;
o.response=100;
this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }
else
if(value=="dislike")
{
  if  (this.surveymodelLst.indexOf(id) != -1)
{
  //this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);

  this.QstsID.splice(this.QstsID.indexOf(id), 1);

  this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
  console.log("0");

}
if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("000");

}

//o.SurveyId=this.Id;
o.qstId=id;
o.response=0;
this.surveymodelLst.push(o);
//  this.QstsID.pop(id);
  this.QstRespone.push(value)
this.QstsID.push(id);
this.QstRespone.push(value)
console.log(" Value is : ", value ,"Question Id: ",id);

console.log("QstsID",this.QstsID);

console.log("QstRespone",this.QstRespone);
console.log("SurveymodelLst",this.surveymodelLst);

}
}

onItemChangeFaces(id,value){
  let o=new  SurveyResponseModel();

  console.log(" Value is : ", value ,"Question Id: ",id);

  if(value=='sad')
  {
    if(this.QstsID.indexOf(id) != -1)
{
    this.QstsID.splice(this.QstsID.indexOf(id), 1);

    this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}
if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("000");

}
//o.SurveyId=this.Id;
o.qstId=id;
//o.response=value;
o.response=20;

this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }
else   if(value=='sad1')
{
  if(this.QstsID.indexOf(id) != -1)
{
  this.QstsID.splice(this.QstsID.indexOf(id), 1);

  this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}
if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
this.surveymodelLst.pop();

this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
console.log("000");

}
//o.SurveyId=this.Id;
o.qstId=id;
//o.response=value;
o.response=40;

this.surveymodelLst.push(o);
//  this.QstsID.pop(id);
  this.QstRespone.push(value)
this.QstsID.push(id);
this.QstRespone.push(value)
console.log(" Value is : ", value ,"Question Id: ",id);

console.log("QstsID",this.QstsID);

console.log("QstRespone",this.QstRespone);
console.log("SurveymodelLst",this.surveymodelLst);

}
  else if (value=='neutral')
  {
    if(this.QstsID.indexOf(id) != -1)
{

    this.QstsID.splice(this.QstsID.indexOf(id), 1);

   // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}
if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
this.surveymodelLst.pop();

this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
console.log("000");

}
//o.SurveyId=this.Id;
o.qstId=id;
//o.response=value;
o.response=60;
this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }
  else if (value=='happy')
  {
    if(this.QstsID.indexOf(id) != -1)
{

    this.QstsID.splice(this.QstsID.indexOf(id), 1);

   // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}

if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
this.surveymodelLst.pop();

this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
console.log("000");

}
//o.SurveyId=this.Id;
o.qstId=id;
//if(value==3)
o.response=80;
/*else if(value==4)
o.response=80;
else
o.response=100;*/
this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }
  else 
  //if (value=='happy')
  {
if    (this.QstsID.indexOf(id) != -1)
{

    this.QstsID.splice(this.QstsID.indexOf(id), 1);

   // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}

if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
this.surveymodelLst.pop();

this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
console.log("000");

}
//o.SurveyId=this.Id;
o.qstId=id;
//if(value==3)
o.response=100;
/*else if(value==4)
o.response=80;
else
o.response=100;*/
this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }

}


onItemChangeRating(id,value){
  let o=new  SurveyResponseModel();

  console.log(" Value is : ", value ,"Question Id: ",id);

  if(value==10)
  {
    (this.QstsID.indexOf(id) != -1);
{
    this.QstsID.splice(this.QstsID.indexOf(id), 1);

    this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}
if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}//o.SurveyId=this.Id;
o.qstId=id;
//o.response=value;
o.response=10;

this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }

  else if (value==20)
  {
   if (this.QstsID.indexOf(id) != -1)
{

    this.QstsID.splice(this.QstsID.indexOf(id), 1);

   // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}
if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}
//o.SurveyId=this.Id;
o.qstId=id;
//o.response=value;
o.response=20;
this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }
  else if (value==30)
  {
    if(this.QstsID.indexOf(id) != -1)
{

    this.QstsID.splice(this.QstsID.indexOf(id), 1);

   // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}

if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}
//o.SurveyId=this.Id;
o.qstId=id;
//if(value==3)
o.response=30;
/*else if(value==4)
o.response=80;
else
o.response=100;*/
this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }
  else if (value==40)
  {
   if (this.QstsID.indexOf(id) != -1)
{

    this.QstsID.splice(this.QstsID.indexOf(id), 1);

   // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}

if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}
//o.SurveyId=this.Id;
o.qstId=id;
//if(value==3)
o.response=40;
/*else if(value==4)
o.response=80;
else
o.response=100;*/
this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }
  else if (value==50)
  {
   if (this.QstsID.indexOf(id) != -1)
{

    this.QstsID.splice(this.QstsID.indexOf(id), 1);

   // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}

if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}
//o.SurveyId=this.Id;
o.qstId=id;
//if(value==3)
o.response=50;
/*else if(value==4)
o.response=80;
else
o.response=100;*/
this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }
  else if (value==60)
  {
    if(this.QstsID.indexOf(id) != -1)
{

    this.QstsID.splice(this.QstsID.indexOf(id), 1);

   // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}

if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}
//o.SurveyId=this.Id;
o.qstId=id;
//if(value==3)
o.response=60;
/*else if(value==4)
o.response=80;
else
o.response=100;*/
this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }
  else if (value==70)
  {
   if (this.QstsID.indexOf(id) != -1)
{

    this.QstsID.splice(this.QstsID.indexOf(id), 1);

   // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}

if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}
//o.SurveyId=this.Id;
o.qstId=id;
//if(value==3)
o.response=70;
/*else if(value==4)
o.response=80;
else
o.response=100;*/
this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }
  else if (value==80)
  {
   if (this.QstsID.indexOf(id) != -1)
{

    this.QstsID.splice(this.QstsID.indexOf(id), 1);

   // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}

if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}
//o.SurveyId=this.Id;
o.qstId=id;
//if(value==3)
o.response=80;
/*else if(value==4)
o.response=80;
else
o.response=100;*/
this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }

  else if (value==90)
  {
   if (this.QstsID.indexOf(id) != -1)
{

    this.QstsID.splice(this.QstsID.indexOf(id), 1);

   // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}

if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}
//o.SurveyId=this.Id;
o.qstId=id;
//if(value==3)
o.response=90;
/*else if(value==4)
o.response=80;
else
o.response=100;*/
this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }
  else 
  {
  if  (this.QstsID.indexOf(id) != -1)
{

    this.QstsID.splice(this.QstsID.indexOf(id), 1);

   // this.QstRespone.splice(this.QstRespone.indexOf(value), 1);
}

if(  this.surveymodelLst.filter(x=>x.qstId==id).length>0)
{
  this.surveymodelLst.pop();

  this.surveymodelLst.splice(this.QstsID.indexOf(id), 1);
  console.log("1111111111");

}
//o.SurveyId=this.Id;
o.qstId=id;
//if(value==3)
o.response=100;
/*else if(value==4)
o.response=80;
else
o.response=100;*/
this.surveymodelLst.push(o);
  //  this.QstsID.pop(id);
    this.QstRespone.push(value)
  this.QstsID.push(id);
  this.QstRespone.push(value)
  console.log(" Value is : ", value ,"Question Id: ",id);

  console.log("QstsID",this.QstsID);

  console.log("QstRespone",this.QstRespone);
  console.log("SurveymodelLst",this.surveymodelLst);

  }
}
Message:string="";
  onSubmit() {
    this.submitted = true;
    this.isSubmitted = true;
   /* if (this.SurveyForm.invalid) {
      return;
    }*/
   // const surveyModel = this.SurveyForm.value;
 /*  this.surveyService.getIPAddress().subscribe((res:any)=>{  
    this.ipAddress=res.ip;  
    console.log("This IP Address=  "+this.ipAddress);
  }); */
    let model = {
      surveyId: this.Id,
      //macAddress:this.ipAddress,
      responses:this.surveymodelLst
/*fromDate:surveyModel.fromDate,
      toDate: surveyModel.toDate,
    
      QuestionIds:surveyModel.QstData,*/
 

      
    };

/*
model.macAddress=this.ipAddress;
*/
    this.surveyService.submitSurvey(model).subscribe( {
      next: (res) => {
      //  this.toastrService.Create(EntityNames.Survey);
  
        this.toastrService.Accept("تم التصويت بنجاح");
       // this.isSubmitted=false;
//this.Message="شكراً على مشاركتكم فى الاستبيان";
   /*     const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Survey';

        this.router.navigateByUrl(returnUrl);   */
      
      },
      error: (err) => {


        this.toastrService.danger(err.error.error,"خطأ");
        this.submitted = false;
        this.isSubmitted = false;
       }
    });
  }


 
  get fc() {
    return this.SurveyForm.controls;
  }


  name:string;

  get QstData() {
    return this.QstData.controls["QstData"] as FormArray;
  }

  get responseData() {
    return this.responseData.controls["responseData"] as FormArray;
  }
}
