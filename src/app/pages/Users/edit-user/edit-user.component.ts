import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DistrictModel } from '../../../models/District/District.model';
import { OwnerModel } from '../../../models/Owners/owner.model';
import { RoleModel } from '../../../models/User/role.model';
import { UserModel } from '../../../models/User/User.model';
import { DistrictService } from '../../../services/district.service';
import { RoleService } from '../../../services/role.service';
import { ToastrService } from '../../../services/toastr.service';
import { UserService } from '../../../services/user.service';
import { EntityNames } from '../../../shared/Entity-Names';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
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
  roleModel: RoleModel[] = [];

  submitted = false;
  isSubmitted: boolean = false;
  showPass = false;
  currentUser: UserModel;
  Id: string;
  gender: number;
  ngOnInit() {
    this.initForm();
    this.route.params.subscribe((params) => {
      this.Id = params['id'];
    });
    this.getUserInfoById();
    this.getRoles();
  }
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
      id: [''],
      //  name: ["", [Validators.required, Validators.minLength(3)]],
      //   userName: ["", [Validators.required, Validators.minLength(3)]],
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

      nationalId: [null, [Validators.pattern('^[0-9]*$')]],

      phoneNumber: [null, [Validators.pattern('^[0-9]*$')
    ,Validators.min(0),
    Validators.minLength(10)
    ]],
      mobil: [
        null,
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.min(0)
        ],
      ],
      gender: [null],
      email: ['', [Validators.email]],
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

  getUserInfoById() {
    this.userService.getUserId(this.Id).subscribe((res) => {
      this.currentUser = res.entity;
      this.bindForm();
    });
  }
  bindForm() {
    this.userForm.controls['id'].setValue(this.currentUser.id);
    this.userForm.controls['name'].setValue(this.currentUser.name);

    this.userForm.controls['nationalId'].setValue(this.currentUser.nationalId);

    this.userForm.controls['phoneNumber'].setValue(
      this.currentUser.phoneNo
    );
    this.userForm.controls['mobil'].setValue(this.currentUser.mobil);
    this.userForm.controls['email'].setValue(this.currentUser.email);
    this.userForm.controls['gender'].setValue(this.currentUser.gender);
    this.gender = this.currentUser.gender;

    this.userForm.controls['roleId'].setValue(this.currentUser.roleId);

    //this.gender=this.currentUser.gender;
    this.roleId = this.currentUser.roleId;
    console.log('RoleId= ' + this.roleId);
    if(this.currentUser.gender==1)
    this.GenderVal=true;
    else
    this.GenderVal=false;

if(this.currentUser.employeeId!=null)
this.IsEmp=true;
  }
  IsEmp:boolean;
  GenderVal:boolean;
  roleId: string;
  onSubmit() {
    this.submitted = true;
    this.isSubmitted = true;
   /* if (this.userForm.invalid) {
      return;
    }*/
    const owModel = this.userForm.value;

    let model = {
      id: this.Id,
      name: owModel.name,
      userName: owModel.userName,

      nationalId: owModel.nationalId,
      phoneNumber: owModel.phoneNumber,
      email: owModel.email,
      mobil: owModel.mobil,
      password: owModel.password,
    gender:this.GenderVal,
      roleId: owModel.roleId,
    };

    model.id = this.Id;
    const isWhitespaceString = str => !/\S/.test(str)
    if( isWhitespaceString(model.userName)==true||isWhitespaceString(model.name)==true
    ||isWhitespaceString(model.password)==true)
    this.toastrService.danger("يجب إستكمال البيانات لإتمام عملية الحفظ","خطأ");
    else
    {
    this.userService.updateUser(model).subscribe( {
      next: (res) => {
        this.toastrService.Update(EntityNames.User);
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
