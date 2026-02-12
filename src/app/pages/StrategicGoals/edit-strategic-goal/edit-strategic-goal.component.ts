import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StartegicGoalsModel } from '../../../models/StrategicGoals/StrategicGoals.model';
import { StartegicGoalService } from '../../../services/startegicGoals.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';

@Component({
  selector: 'app-edit-strategic-goal',
  templateUrl: './edit-strategic-goal.component.html',
  styleUrls: ['./edit-strategic-goal.component.scss']
})
export class EditStrategicGoalComponent implements OnInit {
  StrategicGoalsForm!: FormGroup;
  loading = false;
  submitted = false;
  isSubmitted= false;
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private startegicGoalService: StartegicGoalService,
      private toastrService: ToastrService

  ) { 

    if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
    this.router.navigateByUrl('/auth');
  }
  Id: string;
  currentStartegicGoal:StartegicGoalsModel;
  ngOnInit(){
    this.initForm();
    this.route.params.subscribe((params) => {
      this.Id = params["id"];

    });

    this.getStartegicGoalById();
  }
  initForm() {
      this.StrategicGoalsForm = this.formBuilder.group({
        id:[''],
        strategicGoal: ['', Validators.required],
          goalDesc: ['']
      });
  }
  getStartegicGoalById() {
    this.startegicGoalService.getById(this.Id).subscribe((res) => {
      this.currentStartegicGoal= res.entity;
      this.bindForm();
    });
  }
  bindForm() {
    this.StrategicGoalsForm.controls["id"].setValue(this.currentStartegicGoal.id);
    this.StrategicGoalsForm.controls["strategicGoal"].setValue(this.currentStartegicGoal.strategicGoalName
      );
   //   this.StrategicGoalsForm.controls["goalCode"].setValue(this.currentStartegicGoal.goalCode
     //   );
    this.StrategicGoalsForm.controls["goalDesc"].setValue(this.currentStartegicGoal.strategicGoalDesc);
  
    }
  // convenience getter for easy access to form fields
  get f() { return this.StrategicGoalsForm.controls; }


  onSubmit() {
    this.submitted = true;
    //this.isSubmitted = true;
    this.isSubmitted = true;
    if (this.StrategicGoalsForm.invalid) {
      return;
    }
    this.loading=true;
    const model1 = this.StrategicGoalsForm.value;
    let model = {
      id:this.Id,
      strategicGoalName: model1.strategicGoal,
      strategicGoalDesc: model1.goalDesc
     
    };
    /*this.GrantStepService.addGrantStep(model).subscribe((res) => {
      if (res.status == 200) {
       
       this.toastrService.Create(EntityNames.GrantSteps);
       const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/GrantSteps';
       this.router.navigateByUrl(returnUrl);         
      }
      else
      alert("Error");
    });*/
    const isWhitespaceString = str => !/\S/.test(str)
    if( isWhitespaceString(model.strategicGoalName)==true)
    this.toastrService.danger("يجب إدخال بيانات الهدف لإتمام عملية الحفظ","خطأ");
else
{
    this.startegicGoalService.updateStartegicGoal(model).subscribe( {
      next: (res) => {
        this.toastrService.Update(EntityNames.StrategicGoal);

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/StrategicGoals';

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
  get fc() { return this.StrategicGoalsForm.controls; }

}
