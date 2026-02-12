import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DepartmentModel } from '../../../models/Departments/Department.model';
//import { JobModel } from '../../../models/Job/job.model';
import { DepartmentService } from '../../../services/department.service';
import { EmployeeService } from '../../../services/employee.service';
//import { JobService } from '../../../services/job.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private empService: EmployeeService,
    private deptService: DepartmentService,
   // private jobService: JobService,

    private router: Router,
    private route: ActivatedRoute,

    private toastrService: ToastrService,
    private translate: TranslateService
  ) {

    if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
    this.router.navigateByUrl('/auth');
  }
  empForm: FormGroup;

  submitted = false;
  isSubmitted :boolean= false;
  showPass = false;
  departments: DepartmentModel[] = [];

 // Jobs: JobModel[] = [];
  ngOnInit() {
    this.initForm();
    this.getDepartmenst();
//this.getJobs();
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
    this.submitted = true;
    this.isSubmitted = true;
    if (this.empForm.invalid) {
      return;
    }
    const owModel = this.empForm.value;

  

    
    let model = {
      name: owModel.name,

      nationalId: owModel.nationalId,
      phone:owModel.phone,
      email:owModel.email,
      mobil:owModel.mobil,
      notes:owModel.notes,
      jobId:this.JobId,
      deptIds:this.DeptIds

    };

    const isWhitespaceString = str => !/\S/.test(str)
    if( isWhitespaceString(model.name)==true||isWhitespaceString(model.mobil)==true)
    this.toastrService.danger("يجب إستكمال البيانات  لإتمام عملية الحفظ","خطأ");
    else
    {   
      model.mobil=owModel.mobil;
      console.log("Mobil number is= "+model.mobil);
    this.empService.addEmployee(model).subscribe( {
      next: (res) => {
        this.toastrService.Create(EntityNames.Employee);
       // this.getDistricts();

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Employee';

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
    return this.empForm.controls;
  }

  
  get deptIds() {
    return this.deptIds.controls["deptIds"] as FormArray;
  }
}
