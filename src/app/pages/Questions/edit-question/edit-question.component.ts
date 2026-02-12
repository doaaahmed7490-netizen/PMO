import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AnswerTypeModel } from '../../../models/Quest/AnswerType.model';
import { QuestionModel } from '../../../models/Quest/Question.model';
import { ServiceModel } from '../../../models/Service/Service.model';
import { QuestionService } from '../../../services/Quest.service';
import { ServicesService } from '../../../services/services.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';
@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private  questService: QuestionService,
    private  service: ServicesService,

    private router: Router,
    private route: ActivatedRoute,

    private toastrService: ToastrService,
    private translate: TranslateService
  ) {
    if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
    this.router.navigateByUrl('/auth');
  }
  QuestForm: FormGroup;

  submitted = false;
  isSubmitted :boolean= false;
  showPass = false;
  answerType: AnswerTypeModel[];
Id:string;
currentQst:QuestionModel;
  ngOnInit() {
    this.initForm();
    this.getAnswerTypes();
    this.getServices();
    this.route.params.subscribe((params) => {
      this.Id = params["id"];
    
    });
    this.getQuestInfoById();
  }

  getAnswerTypes() {
    this.questService.getAnswersTypes().subscribe((res) => {
      this.answerType = res;
    });
  }
  getQuestInfoById() {
    this.questService.getById(this.Id).subscribe((res) => {
      this.currentQst = res.entity;

      this.bindForm();
    });

  }


  bindForm() {
    this.QuestForm.controls["id"].setValue(this.currentQst.id);
    this.QuestForm.controls["quest"].setValue(this.currentQst.questText);
    this.QuestForm.controls["questDesc"].setValue(this.currentQst.questDesc);
    this.QuestForm.controls["qstWeight"].setValue(this.currentQst.qstWeight);

    this.QuestForm.controls["answerTypeId"].setValue(this.currentQst.answerTypeId);
    this.QuestForm.controls["serviceId"].setValue(this.currentQst.serviceIds);
 this.ServiceIds=this.currentQst.serviceIds;
this.answerTypeId=this.currentQst.answerTypeId;
console.log("Annn= "+this.answerTypeId);
  }
  answerTypeId:string;
  getServices() {
    this.service.searchService({
       PageNumber: 1,
       PageSize: 1000,
     })
     .subscribe((res) => {
       this.Service = res.entity.entities.filter(x=>x.serviceName!='');
     });
 }
Service:ServiceModel[]
  initForm() {
    this.QuestForm = this.formBuilder.group({
     
id:[""],
      quest: ["",[Validators.required,Validators.minLength(3)]],
 
      questDesc: [null],
      qstWeight:[null,[Validators.required]],


     
      answerTypeId:[null,[Validators.required]],
      serviceId:[null,[Validators.required]]



 
  
     
    });
  }
  selectChangeHandlerAnserType(value:any)
  {
  this.answerTypeId=value;
    console.log("AnswerTypeId= "+value);

 
  }
    AnswerTypeId:string
    selectChangeHandlerServices(value:any)
    {
    this.ServiceIds=value;
      console.log("ServiceIds= "+value);
  
   
    }
      ServiceIds:string[]

  onSubmit() {
    this.submitted = true;
    this.isSubmitted = true;
    if (this.QuestForm.invalid) {
      return;
    }
    const owModel = this.QuestForm.value;

  

    
    let model = {
      id:this.Id,
      questText: owModel.quest,

      questDesc: owModel.questDesc,

      qstWeight: owModel.qstWeight,
      answerTypeId:this.answerTypeId,
      serviceIds:this.ServiceIds


    };

   


//model.deptIds=this.DeptIds;
const isWhitespaceString = str => !/\S/.test(str)
if( isWhitespaceString(model.questText)==true)
this.toastrService.danger("يجب إدخال بيانات الاسئلة لإتمام عملية الحفظ","خطأ");
else
{
    this.questService.updateQuestion(model).subscribe( {
      next: (res) => {
        this.toastrService.Update(EntityNames.Question);
       // this.getDistricts();

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Questions';

        this.router.navigateByUrl(returnUrl);      },
        error: (err) => {


          this.toastrService.danger(err.error.error,"خطأ");
          this.submitted = false;
          this.isSubmitted = false;
         }
    });
  }
}
 
  get fc() {
    return this.QuestForm.controls;
  }

  
 
}
