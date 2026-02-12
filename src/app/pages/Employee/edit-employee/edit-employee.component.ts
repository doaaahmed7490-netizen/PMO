import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { retryWhen } from 'rxjs';
import { DepartmentModel } from '../../../models/Departments/Department.model';
import { employee } from '../../../models/Employee/Employee.model';
//import { JobModel } from '../../../models/Job/job.model';
import { DepartmentService } from '../../../services/department.service';
import { EmployeeService } from '../../../services/employee.service';
//import { JobService } from '../../../services/job.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private empService: EmployeeService,
    private deptService: DepartmentService,

    private router: Router,
    private route: ActivatedRoute,

    private toastrService: ToastrService,
    private translate: TranslateService,
    private departmentService: DepartmentService
   // private jobService: JobService

  ) {
    if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
    this.router.navigateByUrl('/auth');
  }
  empForm: FormGroup;

  submitted = false;
  isSubmitted :boolean= false;
  showPass = false;
  Id: string;
  currentEmp:employee;
  departments: DepartmentModel[] = [];
 // Jobs: JobModel[] = [];

  ngOnInit() {
    this.initForm();
    this.getDepartmenst();
 //   this.getJobs();
    this.route.params.subscribe((params) => {
      this.Id = params["id"];

    });
    this.getEmpInfoById();

  }
  getEmpInfoById() {
    this.empService.getById(this.Id).subscribe((res) => {
      this.currentEmp = res.entity;
      this.currentDept=res.entity.department;
      console.log("CurrentDept="+this.currentDept.values);

      this.bindForm();
    });

  }
  currentDept:DepartmentModel[];
  currentdeptId:string[];
  bindForm() {
    this.empForm.controls["id"].setValue(this.currentEmp.id);
    this.empForm.controls["name"].setValue(this.currentEmp.name);
    this.empForm.controls["notes"].setValue(this.currentEmp.notes);
    this.empForm.controls["nationalId"].setValue(this.currentEmp.nationalId);
    this.empForm.controls["mobil"].setValue(this.currentEmp.mobil);
    this.empForm.controls["phone"].setValue(this.currentEmp.phone);
  //  this.empForm.controls["jobId"].setValue(this.currentEmp.jobId);
    this.empForm.controls["email"].setValue(this.currentEmp.email);


    this.empForm.controls["deptId"].setValue(this.currentEmp.deptIds);

  }
  getDepartmenst() {
    this.deptService
      .searchDepartments({
        PageNumber: 1,
        PageSize: 1000,
      })
      .subscribe((res) => {
        this.departments = res.entity.entities.filter(x=>x.departmentName!='');
      });
  }

   /*
  getJobs() {
    this.jobService
      .searchJobs({
        PageNumber: 1,
        PageSize: 1000,
      })
      .subscribe((res) => {
        this.Jobs = res.entity.entities.filter(x=>x.jobName!='');
      });
  }*/
  initForm() {
    this.empForm = this.formBuilder.group({
     
id:[""],
      name: ["",[Validators.required,Validators.minLength(3)]],
 
      nationalId: [null, [Validators.pattern('^[0-9]*$'), Validators.minLength(10),
      Validators.min(0)   ,Validators.maxLength(10)
    ]],
   

      phone: [null, [Validators.pattern('^[0-9]*$'), Validators.minLength(10),
      Validators.min(0)   ,Validators.maxLength(10)
    ]],
      mobil: [null,[Validators.pattern('^[0-9]*$'),Validators.minLength(10),
      Validators.min(0)
      ,Validators.maxLength(12)]],
      email:[""],
      notes:[""],
     // jobId:[null],
      deptId: [null, [Validators.required]],
      //deptIds: this.formBuilder.array([]),


 
  
     
    });
  }
  selectChangeHandlerDept(value:any)
  {
  //  this.DeptIds.push(value)
  this.DeptIds=value;
    console.log("Departments= "+value);

    //this.DeptIds = value.target.value; 
   /* this.DeptIds.push(value.target.value)
console.log("Departments= "+this.DeptIds);
*/
/*this.DeptIds.push(value.target.value);
console.log("Departments222= "+this.DeptIds);
*/
  }
    DeptIds:string[]=[];
    selectChangeHandlerJob(value:any)
    {
      this.JobId=value.target.value
      console.log("Job= "+this.JobId);

    }
    JobId:string;
  onSubmit() {
    console.log("Welcome");
    this.submitted = true;
    this.isSubmitted = true;
    /*
    if (this.empForm.invalid) {
      return;
    }
    */
    const owModel = this.empForm.value;

  

    
    let model = {
      id:this.Id,
      name: owModel.name,

      nationalId: owModel.nationalId,
      phone:owModel.phone.toString(),
      email:owModel.email,
      mobil:owModel.mobil.toString(),
      notes:owModel.notes,
      jobId:owModel.jobId,
      deptIds:owModel.deptId

    };


    model.id=this.Id;
   

  /*  const isWhitespaceString = str => !/\S/.test(str)
    if( isWhitespaceString(model.name)==true||isWhitespaceString(model.mobil)==true)
  
    this.toastrService.danger("يجب إستكمال البيانات  لإتمام عملية الحفظ","خطأ");
    else
    {*/   
    this.empService.updateEmployee(model).subscribe( {
      next: (res) => {
        this.toastrService.Update(EntityNames.Employee);
       // this.getDistricts();

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Employee';

        this.router.navigateByUrl(returnUrl);      },
        error: (err) => {


          this.toastrService.danger(err.error.error,"خطأ");
          this.submitted = false;
          this.isSubmitted = false;
         }

    });
 // }
  }
 
 
  get fc() {
    return this.empForm.controls;
  }

  
  get deptIds() {
    return this.deptIds.controls["deptIds"] as FormArray;
  }
}
