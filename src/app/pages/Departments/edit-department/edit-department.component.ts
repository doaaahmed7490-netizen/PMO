import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core/dist/public-api';
import { DepartmentModel } from '../../../models/Departments/Department.model';
import { DepartmentService } from '../../../services/department.service';
import { ToastrService } from '../../../services/toastr.service';
import { EntityNames } from '../../../shared/Entity-Names';
@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss']
})
export class EditDepartmentComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute,

    private toastrService: ToastrService
  ) {
    if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
    this.router.navigateByUrl('/auth');
  }
  DepartmentForm: FormGroup;
  departmet: DepartmentModel[] = [];
  Types = ["Event", "Knowledge Center"];
  submitted = false;
  isSubmitted :boolean= false;
  Id: string;
  currentDepartment:DepartmentModel;
  ngOnInit() {
    this.initForm();
    this.getDepartmenst();
    this.route.params.subscribe((params) => {
      this.Id = params["id"];

    });
    this.getDepartmentInfoById();
  }

  getDepartmentInfoById() {
    this.departmentService.getById(this.Id).subscribe((res) => {
      this.currentDepartment = res.entity;
      this.bindForm();
    });
  }
  bindForm() {
    this.DepartmentForm.controls["id"].setValue(this.currentDepartment.id);
    this.DepartmentForm.controls["deparment"].setValue(this.currentDepartment.departmentName);
    this.DepartmentForm.controls["notes"].setValue(this.currentDepartment.desc);
   this.DepartmentForm.controls["parentId"].setValue(this.currentDepartment.mainDeptId);

  }
  getDepartmenst() {
    this.departmentService
      .searchDepartments({
        PageNumber: 1,
        PageSize: 1000,
      })
      .subscribe((res) => {
        this.departmet = res.entity.entities.filter(x=>x.departmentName!='');
      });
  }
  initForm() {
    this.DepartmentForm = this.formBuilder.group({
      id:[null],
      deparment: ["", [Validators.required, Validators.minLength(3)]],
      notes: [""],
      parentId: [""],
    });
  }
  onSubmit() {
    this.submitted = true;
    this.isSubmitted = true;
    if (this.DepartmentForm.invalid) {
      return;
    }
    const departmentModel = this.DepartmentForm.value;
    let model = {
      id:this.Id,
      departmentName: departmentModel.deparment,
      desc: departmentModel.notes,
    
      mainDeptId:
      departmentModel.parentId.length < 1 ? null : departmentModel.parentId,
    };
  

model.id=this.Id;

const isWhitespaceString = str => !/\S/.test(str)
if( isWhitespaceString(model.departmentName)==true)
this.toastrService.danger("يجب إدخال بيانات الإدارة لإتمام عملية الحفظ","خطأ");
else
{
    this.departmentService.updateDepartment(model).subscribe( {
      next: (res) => {
        this.toastrService.Update(EntityNames.Department);

        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Departments';

        this.router.navigateByUrl(returnUrl);      
      },
     // }
     // else
     error: (err) => {

     // this.toastrService.danger(err.message);
     //this.alertService.error(err.message);

     this.toastrService.danger(err.error.error,"خطأ");
     this.submitted = false;
      this.isSubmitted = false;
     }
    
    });
  }
  }
 
 
  get fc() {
    return this.DepartmentForm.controls;
  }
}
