import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MilestoneModel, StrategicGoals } from '../../../models/Milestone/Milestone.model';
import { StartegicGoalsModel } from '../../../models/StrategicGoals/StrategicGoals.model';
import { MilestoneService } from '../../../services/milestone.service';
import { StartegicGoalService } from '../../../services/startegicGoals.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';

@Component({
  selector: 'app-add-milestone',
  templateUrl: './add-milestone.component.html',
  styleUrls: ['./add-milestone.component.scss']
})
export class AddMilestoneComponent implements OnInit {
  MileStoneForm: FormGroup;
  loading = false;
  submitted = false;
  isSubmitted= false;
  milestone: MilestoneModel[] = [];
  strategiGoals: StartegicGoalsModel[] = [];

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private startegicGoalService: StartegicGoalService,
      private milestoneService: MilestoneService,

      private toastrService: ToastrService

  ) {
   // if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
  //this.router.navigateByUrl('/auth');
   }
      projects=[];
      tasks=[];
DocTypes=[];
DocVersion=[];
  ngOnInit(){
     this.projects = [
 { id: 1, label: 'المشروع الاول' },
    { id: 2, label: 'المشروع الثانى' },
    { id: 3, label: 'المشروع الثالث' },
    { id: 4, label: 'المشروع الرابع' },
    { id: 5, label: 'المشروع الخامس' }
  ];
     this.tasks = [
 { id: 1, label: 'المهمة الاولى' },
    { id: 2, label: 'المهمة الثانية' },
    { id: 3, label: 'المهمة الثالثة' },
    { id: 4, label: 'المهمة الرابعة' },
    { id: 5, label: 'المهمة الخامسة' }
  ];
      this.DocTypes = [
 { id: 1, label: 'عقد المشروع' },
    { id: 2, label: 'جدول الكميات' },
    { id: 3, label: 'مستندات الانجاز' },
    { id: 4, label: 'خطاب الترسية ' },
    { id: 5, label: 'مرفقات اخرى' }
  ];
     this.DocVersion = [
 { id: 1, label: '1' },
    { id: 2, label: '2' },
    { id: 3, label: '3' },
    { id: 4, label: '4' },
    { id: 5, label: '5' }
  ];
    this.initForm();
  //  this.getStrategicGoals();
  }
  getStrategicGoals() {
    this.startegicGoalService
      .searchStartegicGoals({
        PageNumber: 1,
        PageSize: 1000,
      })
      .subscribe((res) => {
        this.strategiGoals = res.entity.entities;
      });
  }
  initForm() {
      this.MileStoneForm = this.formBuilder.group({
        strategicGoalId: [null, [Validators.required]],
        
        //milestone: [null, Validators.required],
        taskId:[null],
        DocType:[null],
        DocVersion:[null],
        toDate:[null],
          goalDesc: ['']
      });
  }
   onSubmit()
 {
   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/ProjectDocuments';



    this.router.navigateByUrl(returnUrl);
 }
 Close()
 {
   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/ProjectDocuments';



    this.router.navigateByUrl(returnUrl);
 }
  /*selectChangeHandlerGrant(value:any)
  {
    this.MainGoalId = value.target.value; 
    console.log("Goals= "+value);


  
  }*/
    MainGoalId:string[]=[];

    selectChangeHandlerGoals(value:any)
    {
    this.MainGoalId=value;
      console.log("Goals= "+value);
  
   
    }
      GoalIds:string[]=[];


  // convenience getter for easy access to form fields
  get f() { return this.MileStoneForm.controls; }


  save() {
    const model1 = this.MileStoneForm.value;

    const data = {
      strategicGoal: "d",
      goalDesc: "sd"
    };
    if (this.MileStoneForm.invalid) {
      return;
    }
    let model = {
      milestoneName: model1.milestone,
      milestoneDesc: model1.goalDesc,
      strategicGoals:this.MainGoalId

      
    };
    if(model1.goalDesc==null)
    model1.goalDesc='';
    const isWhitespaceString = str => !/\S/.test(str)

    if( isWhitespaceString(model.milestoneName)==true)
this.toastrService.danger("يجب إدخال بيانات الهدف لإتمام عملية الحفظ","خطأ");
else
{
    this.milestoneService.addMilestoneGoal(model).subscribe( {
      next: (res) => {
        this.toastrService.Create(EntityNames.Milestone);

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/ProjectDocuments';

        this.router.navigateByUrl(returnUrl);      
      },
     
     error: (err) => {


      this.toastrService.danger(err.error.error,"خطأ");
      this.submitted = false;
      this.isSubmitted = false;
     }
    
    });
  }
  }
/*
  onSubmit() {
    this.submitted = true;
    this.isSubmitted = true;
    if (this.MileStoneForm.invalid) {
      return;
    }
    this.loading=true;
    const model1 = this.MileStoneForm.value;
    let model = {
      milestoneName: model1.milestone,
      milestoneDesc: model1.goalDesc,
      strategicGoals:this.MainGoalId

      
    };


    this.milestoneService.addMilestoneGoal(model).subscribe( {
      next: (res) => {
        this.toastrService.Create(EntityNames.Milestone);

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Milestones';

        this.router.navigateByUrl(returnUrl);      
      },
     
     error: (err) => {


      this.toastrService.danger("هذه البيانات تم إضافتها سابقاً","تكرار البيانات");
      this.submitted = false;
      this.isSubmitted = false;
     }
    
    });
  }*/
  get fc() { return this.MileStoneForm.controls; }

}
