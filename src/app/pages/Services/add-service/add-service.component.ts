import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DepartmentModel } from '../../../models/Departments/Department.model';
import { DirectiveGoalModel } from '../../../models/DirectiveGoals/DirectiveGoals.model';
import { employee } from '../../../models/Employee/Employee.model';
import { DepartmentService } from '../../../services/department.service';
import { DirectiveGoalService } from '../../../services/directiveGoals.service';
import { EmployeeService } from '../../../services/employee.service';
import { ServicesService } from '../../../services/services.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
 StrategicGoalsForm!: FormGroup;
  loading = false;
  submitted = false;
  isSubmitted= false;
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
    //  private startegicGoalService: StartegicGoalService,
      private toastrService: ToastrService

  ) {
    //if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
  //this.router.navigateByUrl('/auth');

   }
   options=[];
   selectedValue=''
  ngOnInit(){
     this.selectedValue = '';
  this.options = [
    { id: 1, label: 'فرد' },
    { id: 2, label: 'شركة' },
    { id: 3, label: 'حكومة' }
  ];
    this.initForm();
  }
  initForm() {
      this.StrategicGoalsForm = this.formBuilder.group({
        CustName: ['', Validators.required],
          goalDesc: [''],
          Mobil:[''],
          custId:[''],
          Email:[''],
          Address:[''],
          ContactPersonNm1:[''],
          ContactPersonMobil1:[''],
          ContactPersonEmail1:[''],
          ContactPersonNm2:[''],
          ContactPersonMobil2:[''],
          ContactPersonEmail2:['']

      });
  }

  
  // convenience getter for easy access to form fields
  get f() { return this.StrategicGoalsForm.controls; }



/*
  save() {
    const model1 = this.StrategicGoalsForm.value;

    const data = {
      strategicGoal: "d",
      goalDesc: "sd"
    };
    if (this.StrategicGoalsForm.invalid) {
      return;
    }
    this.startegicGoalService.addStartegicGoal(model1).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
         this.router.navigate(["./table"]);
      },
      error: (e) => console.error(e)
    });
  }

  onSubmit() {
    this.submitted = true;
    this.isSubmitted = true;
    if (this.StrategicGoalsForm.invalid) {
      return;
    }
    this.loading=true;
    const model1 = this.StrategicGoalsForm.value;
 

    let model = {
      strategicGoalName: model1.strategicGoal,
      strategicGoalDesc: model1.goalDesc

      
    };
    const isWhitespaceString = str => !/\S/.test(str)
   if( isWhitespaceString(model.strategicGoalName)==true)
   this.toastrService.danger("يجب إدخال بيانات الهدف لإتمام عملية الحفظ","خطأ");
   else
   {
    this.startegicGoalService.addStartegicGoal(model).subscribe( {
      next: (res) => {
        this.toastrService.Create(EntityNames.StrategicGoal);

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
  */
 onSubmit()
 {
   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Projects';



    this.router.navigateByUrl(returnUrl);
 }
 Close()
 {
   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Projects';



    this.router.navigateByUrl(returnUrl);
 }
  get fc() { return this.StrategicGoalsForm.controls; }

}
