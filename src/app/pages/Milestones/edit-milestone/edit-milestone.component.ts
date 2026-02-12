import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { touches } from 'esri/geometry/geometryEngine';
import { MilestoneModel } from '../../../models/Milestone/Milestone.model';
import { StartegicGoalsModel } from '../../../models/StrategicGoals/StrategicGoals.model';
import { MilestoneService } from '../../../services/milestone.service';
import { StartegicGoalService } from '../../../services/startegicGoals.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';
@Component({
  selector: 'app-edit-milestone',
  templateUrl: './edit-milestone.component.html',
  styleUrls: ['./edit-milestone.component.scss']
})
export class EditMilestoneComponent implements OnInit {
  MileStoneForm!: FormGroup;
  loading = false;
  submitted = false;
  isSubmitted= false;
  Id:string;
  milestoneMode:MilestoneModel;
  strategiGoals: StartegicGoalsModel[] = [];

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private startegicGoalService: StartegicGoalService,
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
    this.getMilestoneById();

    this.getStrategicGoals();

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
  getMilestoneById() {
    this.milestoneService.getById(this.Id).subscribe((res) => {
      this.milestoneMode= res.entity;
      this.bindForm();
    });
  }
  bindForm() {
    this.MileStoneForm.controls["Id"].setValue(this.milestoneMode.id);
    this.MileStoneForm.controls["milestone"].setValue(this.milestoneMode.milestoneName
      );
     // this.MileStoneForm.controls["goalCode"].setValue(this.milestoneMode.goalCode
       // );StrategicGoals
    this.MileStoneForm.controls["goalDesc"].setValue(this.milestoneMode.milestoneDesc);
 this.MileStoneForm.controls["strategicGoals"].setValue(this.milestoneMode.goalIds);
 this.goalId=this.milestoneMode.goalIds;
 console.log("Objective= "+this.goalId);
console.log("mm= "+this.milestoneMode.goalIds);
this.MainGoalId=this.goalId;

    }
    goalId:string[]=[]
    selectChangeHandlerGrant(value:any)
    {
      this.MainGoalId = value.target.value; 
  
  
    
    }
      MainGoalId:string[]=[];


      initForm() {
        this.MileStoneForm = this.formBuilder.group({
          Id:[null],
          strategicGoals: [null, [Validators.required]],
  
          milestone: [null, Validators.required],
            goalDesc: ['']
        });
  
    }

  // convenience getter for easy access to form fields
  get f() { return this.MileStoneForm.controls; }

  selectChangeHandlerGoals(value:any)
  {
  this.MainGoalId=value;
    console.log("Goals= "+value);

 
  }

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
      Id:this.Id,
      milestoneName: model1.milestone,
      milestoneDesc: model1.goalDesc,
      strategicGoals:this.MainGoalId

      
    };
    if(model1.goalDesc==null)
    model1.goalDesc='';
    model.strategicGoals=this.MainGoalId;
  model.Id=this.Id;
    this.milestoneService.updateMilestone(model1).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        //alert("welcome");
        // this.toastrService.Create(EntityNames.BlockLaw);
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Milestones';
      },
      error: (e) => console.error(e)
    });
  }

  onSubmit() {

    this.submitted = true;
    this.isSubmitted = true;
    if (this.MileStoneForm.invalid) {
      return;
    }

    this.submitted = true;
    //this.isSubmitted = true;
    this.isSubmitted = true;
    const model1 = this.MileStoneForm.value;

    const data = {
      strategicGoal: "d",
      goalDesc: "sd"
    };
   /* if (this.MileStoneForm.invalid) {
      return;
    }*/
    let model = {
      Id:this.Id,
      milestoneName: model1.milestone,
      milestoneDesc: model1.goalDesc,
      strategicGoals:this.MainGoalId

      
    };
   // if(this.MainGoalId!=null)
    model.strategicGoals=this.MainGoalId;


    const isWhitespaceString = str => !/\S/.test(str)
    if( isWhitespaceString(model.milestoneName)==true)
this.toastrService.danger("يجب إدخال بيانات الهدف لإتمام عملية الحفظ","خطأ");
else
{
    this.milestoneService.updateMilestone(model).subscribe( {
      next: (res) => {
        this.toastrService.Update(EntityNames.Milestone);

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Milestones';

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
  get fc() { return this.MileStoneForm.controls; }

}
