import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BaseResponse } from '../models/base.response';
import { login } from '../models/User/loginModel';
import { LoginResponse } from '../models/User/LoginResponse.model';
import { MenuModel } from '../models/User/menu.model';
import { EndPointsService } from './end-points.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

      private userSubject: BehaviorSubject<login | null>;
      public user: Observable<login | null>;
  
      constructor(
          private router: Router,
          private http: HttpClient
      ) {
          this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
          this.user = this.userSubject.asObservable();
      }

      private ActiveDirectoryBaseUrl = environment.filesBaseUrl;

  
      public get userValue() {
          return this.userSubject.value;
      }
  
  
      login(loginModel:any ) {
        return this.http.post<BaseResponse<LoginResponse>>(
            EndPointsService.baseUrl + EndPointsService.User.Login,
            loginModel
            
            /*, {
              headers: header
            }*/
          );
  
     }
 
     IsLogged() {
       if(localStorage.getItem("token") != null||localStorage.getItem("token") != '')
       return true;
       else
       return false;
      //  return localStorage.getItem("token") != null;
      }
      logout() {
          // remove user from local storage and set current user to null
          localStorage.removeItem('user');
          this.userSubject.next(null);
          this.router.navigate(['/pages/auth/login']);
      }
      loadmenu(Id:string,lang:string)
      {
      
        const apiUrl=environment.apiUrl+'Role/LoadMenu?Id='+Id+'&lang='+lang
        //this.languageService.currentLanguage;
    
    
        return this.http.get<MenuModel[]>(apiUrl)
      
      }
    
     
      CheckActiveDirectory(userName: string,password: string): Observable<any> {
        return this.http.get(
          this.ActiveDirectoryBaseUrl + "hr/Login?userName=" + userName+"&&password="+password
        );
      }
    
      GetHrEmployeeInfo(userName: string): Observable<any> {
        return this.http.get(
          this.ActiveDirectoryBaseUrl + "hr/GetEmployeeInfo?userName=" + userName
        );
      }
  
  }
