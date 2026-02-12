import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AnswerTypeModel } from '../../../models/Quest/AnswerType.model';
import { ServiceModel } from '../../../models/Service/Service.model';
import { QuestionService } from '../../../services/Quest.service';
import { RoleService } from '../../../services/role.service';
import { ServicesService } from '../../../services/services.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private  questService: QuestionService,
    private  service: ServicesService,
    private router: Router,
    private route: ActivatedRoute,

    private toastrService: ToastrService,
    private translate: TranslateService,

  ) {

    if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
    this.router.navigateByUrl('/auth');
  }
  QuestForm: FormGroup;

  submitted = false;
  isSubmitted :boolean= false;
  showPass = false;
  answerType: AnswerTypeModel[];

  ngOnInit() {
    this.initForm();
    this.getAnswerTypes();
    this.getServices();
  }
  getAnswerTypes() {
    this.questService.getAnswersTypes().subscribe((res) => {
      this.answerType = res;
    });
  }

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
     

      quest: ["",[Validators.required,Validators.minLength(3)]],
 
      questDesc: [null],
   


     
      answerTypeId:[null,[Validators.required]],
serviceId:[null,[Validators.required]],
qstWeight:[null,[Validators.required]]
 
  
     
    });
  }
  selectChangeHandlerAnserType(value:any)
  {
  this.AnswerTypeId=value;
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
      questText: owModel.quest,

      questDesc: owModel.questDesc,

      answerTypeId:this.AnswerTypeId,
      serviceIds:this.ServiceIds,
      qstWeight:owModel.qstWeight

    };

    const isWhitespaceString = str => !/\S/.test(str)
    if( isWhitespaceString(model.questText)==true)
this.toastrService.danger("يجب إدخال بيانات الاسئلة لإتمام عملية الحفظ","خطأ");
else
{

    this.questService.addQuestion(model).subscribe( {
      next: (res) => {
        this.toastrService.Create(EntityNames.Question);
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
