import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DirectiveGoalModel } from '../../../models/DirectiveGoals/DirectiveGoals.model';
import { MilestoneModel } from '../../../models/Milestone/Milestone.model';
import { DirectiveGoalService } from '../../../services/directiveGoals.service';
import { MilestoneService } from '../../../services/milestone.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';
@Component({
  selector: 'app-edit-directive-goal',
  templateUrl: './edit-directive-goal.component.html',
  styleUrls: ['./edit-directive-goal.component.scss']
})
export class EditDirectiveGoalComponent implements OnInit {
  DirectiveGoalForm!: FormGroup;
  loading = false;
  submitted = false;
  isSubmitted= false;
  Id:string;
  directivegoal:DirectiveGoalModel;
  milestone:MilestoneModel[] = [];

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private directiveGoalService: DirectiveGoalService,
      private milestoneService: MilestoneService,

      private toastrService: ToastrService

  ) { 
    if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
    this.router.navigateByUrl('/auth');
  }
  ngOnInit(){
    this.initForm();
    this.route.params.subscribe((params) => {
      this.Id = params["id"];

    });
    this.getDirectiveGoalById();

    this.getmilestones();

  }
  selectChangeHandlerGrant(value:any)
  {
    this.MainGoalId = value.target.value; 


  
  }
    MainGoalId:string[]=[];
  getmilestones() {
    this.milestoneService
      .searchMilestoneGoals({
        PageNumber: 1,
        PageSize: 1000,
      })
      .subscribe((res) => {
        this.milestone = res.entity.entities.filter(x=>x.milestoneName!='');
      });
  }
  initForm() {

      this.DirectiveGoalForm = this.formBuilder.group({
        Id:[null],

        milestones: [null, [Validators.required]],

        directiveGoal: [null, Validators.required],
          goalDesc: [null]
      });
  }

  getDirectiveGoalById() {
    this.directiveGoalService.getById(this.Id).subscribe((res) => {
      this.directivegoal= res.entity;
      this.bindForm();
    });
  }
  bindForm() {
    this.DirectiveGoalForm.controls["Id"].setValue(this.directivegoal.id);
    this.DirectiveGoalForm.controls["directiveGoal"].setValue(this.directivegoal.directiveGoal
      );
        
    this.DirectiveGoalForm.controls["goalDesc"].setValue(this.directivegoal.directiveGoalDesc);
    this.DirectiveGoalForm.controls["milestones"].setValue(this.directivegoal.goalIds);
    this.MainGoalId=this.directivegoal.goalIds;
  console.log("Milestone="+this.MainGoalId);
    }
  // convenience getter for easy access to form fields
  get f() { return this.DirectiveGoalForm.controls; }


  save() {
    const model1 = this.DirectiveGoalForm.value;

    const data = {
      strategicGoal: "d",
      goalDesc: "sd"
    };
    if (this.DirectiveGoalForm.invalid) {
      return;
    }
    this.directiveGoalService.addDirectiveGoal(model1).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        //alert("welcome");
        // this.toastrService.Create(EntityNames.BlockLaw);
         this.router.navigate(["./table"]);
      },
      error: (e) => console.error(e)
    });
  }


 // MainGoalId:string[]=[];

  selectChangeHandlerGoals(value:any)
  {
  this.MainGoalId=value;
    console.log("Goals= "+value);

 
  }
  onSubmit() {
    this.submitted = true;
    //this.isSubmitted = true;
    this.isSubmitted = true;
    if (this.DirectiveGoalForm.invalid) {
      return;
    }
    this.loading=true;
    //const model = this.DirectiveGoalForm.value;
    /*this.GrantStepService.addGrantStep(model).subscribe((res) => {
      if (res.status == 200) {
       
       this.toastrService.Create(EntityNames.GrantSteps);
       const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/GrantSteps';
       this.router.navigateByUrl(returnUrl);         
      }
      else
      alert("Error");
    });*/
    const model1 = this.DirectiveGoalForm.value;

    const data = {
      strategicGoal: "d",
      goalDesc: "sd"
    };
    if (this.DirectiveGoalForm.invalid) {
      return;
    }
    if(model1.goalDesc==null)
    model1.goalDesc='';
    let model = {
      id:model1.Id,
      directiveGoal: model1.directiveGoal,
      directiveGoalDesc: model1.goalDesc,
      milestones:this.MainGoalId
     
    };
model.id=this.Id;
model.milestones=this.MainGoalId;
const isWhitespaceString = str => !/\S/.test(str)
if( isWhitespaceString(model.directiveGoal)==true)
this.toastrService.danger("يجب إدخال بيانات الهدف لإتمام عملية الحفظ","خطأ");
else
{
    this.directiveGoalService.updateDirectiveGoal(model).subscribe( {
      next: (res) => {
        this.toastrService.Update(EntityNames.DirectiveGoal);

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/DirectiveGoals';

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
  get fc() { return this.DirectiveGoalForm.controls; }

}
