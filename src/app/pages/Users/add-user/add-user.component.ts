import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DistrictModel } from '../../../models/District/District.model';
import { employee } from '../../../models/Employee/Employee.model';
import { OwnerModel } from '../../../models/Owners/owner.model';
import { RoleModel } from '../../../models/User/role.model';
import { UserModel } from '../../../models/User/User.model';
import { DistrictService } from '../../../services/district.service';
import { EmployeeService } from '../../../services/employee.service';
import { RoleService } from '../../../services/role.service';
import { ToastrService } from '../../../services/toastr.service';
import { UserService } from '../../../services/user.service';
import { EntityNames } from '../../../shared/Entity-Names';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private empService: EmployeeService,
    private userService: UserService,

    private router: Router,
    private route: ActivatedRoute,

    private toastrService: ToastrService,
    private translate: TranslateService,
    private roleService: RoleService
  ) {
    if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
    this.router.navigateByUrl('/auth');
  }
  userForm: FormGroup;
  userModel: UserModel[] = [];

  submitted = false;
  isSubmitted: boolean = false;
  showPass = false;
  roleModel: RoleModel[] = [];

  ngOnInit() {
    this.initForm();

    this.getEmployees();
    this.getRoles();
  }
  getEmployees() {
    this.empService
      .searchEmployees({
        PageNumber: 1,
        PageSize: 1000,
      })
      .subscribe((res) => {
        this.Employees = res.entity.entities;
    console.log("Employees "+this.Employees);
      });
  }
  Employees: employee[] = [];
  getRoles() {
    this.roleService
      .ListRoles({
        PageNumber: 1,
        PageSize: 1000,
      })
      .subscribe((res) => {
        this.roleModel = res.entity.entities;
      });
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      //  name: ["", [Validators.required, Validators.minLength(3)]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      /*  password: ["", [Validators.required, Validators.minLength(2)]],
      mobil: ["", [Validators.required]],
phoneNumber:[""],
email:[""],
      nationalId: [null] */

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z\u0621-\u064As]*$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
        ],
      ],
      nationalId: [null,[Validators.pattern('^[0-9]*$'), Validators.minLength(10),
      Validators.min(0),
      Validators.maxLength(10)
    ]],

      phoneNumber: [null,[Validators.pattern('^[0-9]*$'), Validators.minLength(10),
      Validators.min(0),
      Validators.maxLength(10)
    ]],
      mobil: [null,[Validators.pattern('^[0-9]*$'), Validators.minLength(10),
      Validators.min(0),
      Validators.maxLength(12)
    ]],
      gender: [null],
      email: ['', [Validators.email]],
      empId: [null],
      roleId: [null, [Validators.required]],

      //   districtId: ["", [Validators.required]],

      //   area: ["", [Validators.required]],
      // noOfParts: ["", [Validators.required, Validators.minLength(3)]],

      //  noOfBlocks: ["", [Validators.required]],
      //noOfParcels: ["", [Validators.required]],

      //notes: [""],
      /*  this.userForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      userName: ["", [Validators.required, Validators.minLength(3)]],

      password: ["", [Validators.required, Validators.minLength(2)]],
      mobil: ["", [Validators.required]],
phoneNumber:[""],
email:[""],
      nationalId: [null],*/
    });
  }
  selectChangeHandlerEmp(value: any) {
    this.EmpId=value;
    this.IsEmp = true;
    console.log('Job= ' + this.EmpId);
    console.log('Emp Staty ' + this.IsEmp);
    this.getEmpInfoById();
  }

  selectChangeHandlerGender(value: any) {
    this.genderValue = value.target.value;

  }
  genderValue: number;
  getEmpInfoById() {
    this.empService.getById(this.EmpId).subscribe((res) => {
      this.currentEmp = res.entity;
console.log("CurrentEmp= "+this.currentEmp)
      this.bindForm();
    });
  }
  currentEmp: employee;
  currentdeptId: string[];
  bindForm() {
    this.userForm.controls['empId'].setValue(this.currentEmp.id);

    this.userForm.controls['name'].setValue(this.currentEmp.name);
    this.userForm.controls['nationalId'].setValue(this.currentEmp.nationalId);
    this.userForm.controls['mobil'].setValue(this.currentEmp.mobil);
    this.userForm.controls['phoneNumber'].setValue(this.currentEmp.phone);
    this.userForm.controls['email'].setValue(this.currentEmp.email);


  }
  EmpId: string; /*initForm() {
    this.userForm = this.formBuilder.group({
      userName: ["",[Validators.required]],
      Name: ["",[Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]*$')]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8)
         // Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"),
        ],
      ],
      nationalId: [null,[Validators.pattern('^[0-9]*$')]],


      phoneNumber: [null,[Validators.pattern('^[0-9]*$')]],
      mobil: [null,[Validators.required,Validators.pattern('^[0-9]*$')]],

      email: [''],
      gender: [null]

    });
  }*/
  IsEmp: boolean = false;
  onSubmit() {
    console.log("Hellooooooooo");
    this.submitted = true;
    this.isSubmitted = true;
   /* if (this.userForm.invalid) {
      return;
    }*/
    const owModel = this.userForm.value;

    let model = {
      name: owModel.name,
      userName: owModel.userName,

      nationalId: owModel.nationalId,
      phoneNo: owModel.phoneNumber,
      email: owModel.email,
      mobil: owModel.mobil,
      password: owModel.password,
      gender: true,
      employeeId: owModel.empId,
      roleId: owModel.roleId,
    };
    if(this.genderValue==1)
    model.gender=true;
    else
    model.gender=false;
   /* model.employeeId = this.EmpId;
    if (this.genderValue == 1) model.gender = true;
    else model.gender = false;*/
    if (owModel.email == '') model.email = null;
    const isWhitespaceString = str => !/\S/.test(str)
if( isWhitespaceString(model.userName)==true||isWhitespaceString(model.name)==true
||isWhitespaceString(model.password)==true)
this.toastrService.danger("يجب إستكمال البيانات لإتمام عملية الحفظ","خطأ");
else
{
    this.userService.addUser(model).subscribe( {
      next: (res) => {
        this.toastrService.Create(EntityNames.User);
        // this.getDistricts();

        const returnUrl =
          this.route.snapshot.queryParams['returnUrl'] || '/Users';

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
  TogglePassword() {
    var passwordInput = <HTMLInputElement>document.getElementById('password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      this.showPass = true;
    } else {
      passwordInput.type = 'password';
      this.showPass = false;
    }
  }
  get fc() {
    return this.userForm.controls;
  }
}
