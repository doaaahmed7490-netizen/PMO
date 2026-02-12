import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DepartmentModel } from '../../../models/Departments/Department.model';
import { DirectiveGoalModel } from '../../../models/DirectiveGoals/DirectiveGoals.model';
import { employee } from '../../../models/Employee/Employee.model';
import { ServiceModel } from '../../../models/Service/Service.model';
import { DepartmentService } from '../../../services/department.service';
import { DirectiveGoalService } from '../../../services/directiveGoals.service';
import { EmployeeService } from '../../../services/employee.service';
import { ServicesService } from '../../../services/services.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';
@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private empService: EmployeeService,
    private deptService: DepartmentService,
    private service: ServicesService,
private goals:DirectiveGoalService,
    private router: Router,
    private route: ActivatedRoute,

    private toastrService: ToastrService,
    private translate: TranslateService
  ) {

    if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
    this.router.navigateByUrl('/auth');
  }
  serviceForm: FormGroup;

  submitted = false;
  isSubmitted :boolean= false;
  showPass = false;
  department: DepartmentModel[];
emp:employee[];

  GoalsModel: DirectiveGoalModel[] = [];
  Id:string;
  ngOnInit() {
    this.initForm();
    this.getDepartmenst();
this.getemployee();
this.getGoals();

this.route.params.subscribe((params) => {
  this.Id = params["id"];

});
this.getServiceInfoById();
  }
 
  getServiceInfoById() {
    this.service.getById(this.Id).subscribe((res) => {
      this.currentService = res.entity;

      this.bindForm();
    });

  }
  currentService:ServiceModel;

  currentDept:DepartmentModel[];
  currentdeptId:string[];
  //empId:string;
  bindForm() {
    this.serviceForm.controls["id"].setValue(this.currentService.id);
    this.serviceForm.controls["service"].setValue(this.currentService.serviceName);
    this.serviceForm.controls["serviceDesc"].setValue(this.currentService.serviceDesc);
    this.serviceForm.controls["empId"].setValue(this.currentService.empId);
    this.serviceForm.controls["deptId"].setValue(this.currentService.deptId);
this.EmpId=this.currentService.empId;
this.deptId=this.currentService.deptId;

console.log("Emp And Dept= "+this.EmpId, ' '+this.deptId);

    this.serviceForm.controls["goalId"].setValue(this.currentService.objectiveIds);
this.objectiveIds=this.currentService.objectiveIds
    console.log("Objective= "+this.objectiveIds)
  }
objectiveIds:string[];
  getDepartmenst() {
    this.deptService
      .searchDepartments({
        PageNumber: 1,
        PageSize: 1000,
      })
      .subscribe((res) => {
        this.department = res.entity.entities.filter(x=>x.departmentName!='');
      });
  }

   
  getemployee() {
    this.empService
      .searchEmployees({
        PageNumber: 1,
        PageSize: 1000,
      })
      .subscribe((res) => {
        this.emp = res.entity.entities.filter(x=>x.name!='');
      });
  }
  getGoals() {
     this.goals.searchDirectiveGoals({
        PageNumber: 1,
        PageSize: 1000,
      })
      .subscribe((res) => {
        this.GoalsModel = res.entity.entities.filter(x=>x.directiveGoal!='');
      });
  }
  initForm() {
    this.serviceForm = this.formBuilder.group({
     id:[""],

      service: ["",[Validators.required,Validators.minLength(3)]],
 
      serviceDesc: [null],
   


     
      empId:[null,[Validators.required]],
      deptId: [null, [Validators.required]],
      goalId: [null, [Validators.required]]
      //deptIds: this.formBuilder.array([]),


 
  
     
    });
  }
  selectChangeHandlerGoals(value:any)
  {
  this.GoalIds=value;
    console.log("Goals= "+value);

 
  }
    GoalIds:string[]=[];
    selectChangeHandlerEmp(value:any)
    {
      this.EmpId=value;
      console.log("Emp= "+this.EmpId);

    }
    EmpId:string;
    selectChangeHandlerDept(value:any)
    {
      this.deptId=value;
      console.log("dept= "+this.deptId);

    }
    deptId:string;
  onSubmit() {
    this.submitted = true;
    this.isSubmitted = true;
    if (this.serviceForm.invalid) {
      return;
    }
    const owModel = this.serviceForm.value;

  

    
    let model = {
      id:this.Id,
      serviceName: owModel.service,

      serviceDesc: owModel.serviceDesc,

      employeeId:this.EmpId,
      deptId:this.deptId,
      directObjectivesIds:this.GoalIds

    };

   


//model.deptIds=this.DeptIds;
const isWhitespaceString = str => !/\S/.test(str)
if( isWhitespaceString(model.serviceName)==true)
this.toastrService.danger("يجب إدخال بيانات الخدمة لإتمام عملية الحفظ","خطأ");
else
{
    this.service.updateService(model).subscribe( {
      next: (res) => {
        this.toastrService.Update(EntityNames.Service);
       // this.getDistricts();

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Services';

        this.router.navigateByUrl(returnUrl);      },
        error: (err) => {


          this.toastrService.danger(err.error.error,"خطأ");
          this.submitted=false;
          this.isSubmitted=false;
             
          }
    });
  }
 
  } 
  get fc() {
    return this.serviceForm.controls;
  }

  
  get goalId() {
    return this.goalId.controls["goalId"] as FormArray;
  }
}
