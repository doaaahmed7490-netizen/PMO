import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../../../services/alert.service';
import { AuthService } from '../../../services/auth.service';
import { Store } from '@ngrx/store';
import { login } from '../auth-store/auth.counter';
import { ToastrService } from '../../../services/toastr.service';
import { RoleService } from '../../../services/role.service';
import { AuthUser } from '../../../models/auth-user.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  responseData: any;
  auth$: Observable<AuthUser>;
  authStoreSub: Subscription;
  showSidebar: boolean;
  //menu: NbMenuItem[] = [];

  constructor(
    private translate: TranslateService,

    private formBuilder: FormBuilder,
    //  private route: ActivatedRoute,
    private router: Router,
   // private accountService: AuthService,
   // private alertService: AlertService,
    //  private store: Store,
    private toastrservice: ToastrService,
    private store: Store<{ auth: AuthUser }>,
    //private roleServie: RoleService,
    //private authService: AuthService
  ) {
    localStorage.clear();
    localStorage.setItem('RoleId', null);
  }

  ngOnInit() {
    localStorage.clear();
    localStorage.setItem('RoleId', null);
    localStorage.setItem('RoleId', '');
    localStorage.setItem('token', null);
    localStorage.setItem('token', '');

    //console.log();
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.store.dispatch(
      login({ token: 'this is a dummy token', username: 'username' })
    );

     this.router
            .navigate(['/dashboard'])
            .then(() => window.location.reload());
    //this.router.navigate(['']);

    //this.submitted = true;

    // reset alerts on submit
    //this.alertService.clear();

    // stop here if form is invalid
 /*
    const owModel = this.form.value;
    let model = {
      userName: owModel.username,
      password: owModel.password,

    };
      if (this.form.invalid) {

      this.loading = false;
     
    } else this.loading = true;
 
   
    this.accountService
      .login(model)
      .subscribe({
        next: (res) => {
          this.responseData = res.entity;
          console.log('HHH= ' + res.entity);
          console.log('Response11= ' + res.entity.token);
          localStorage.setItem('token', res.entity.token);
          localStorage.setItem('RoleId', res.entity.roleId);
          console.log('RoleId= ' + res.entity.roleId);

          //  this.showSidebar = true;
          this.router
            .navigate(['/dashboard'])
            .then(() => window.location.reload());

         
    this.authStoreSub = this.auth$.subscribe((user) => {
      if (user) {
        this.showSidebar = true;
      }

    });
          // this.router.navigate(['']);
          //         this.router.navigateByUrl('/gis')

          //this.router.navigateByUrl('/dashboard')

          //this.router.navigateByUrl('/dAS')
        },
        error: (error) => {
         /* this.toastrservice.danger(
            'إسم المستخدم او كلمة المرور غير صحيحة',
            'خطأ'
          );

          alert(' إسم المستخدم او كلمة المرور غير صحيحة وبرجاء التاكد من تفعيل هذا المستخدم على النظام');

          // this.alertService.error(error);
          this.loading = false;

          //alert(' المرور او اسم المستخدم غير صحيح');
        },
      });
      */

    /* }
  else
  this.toastrservice.danger("إسم المستخدم او كلمة المرور غير صحيحة","خطأ")
  });
  */
  }

  
}
