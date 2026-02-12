import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../models/base.response';
import { OwnerModel } from '../models/Owners/owner.model';
import { OwnersPaginatedModel } from '../models/Owners/Ownerpaginated.model';
import { PagnationRequest } from '../models/pagination.request';
import { UserModel } from '../models/User/User.model';
import { UserPaginatedModel } from '../models/User/Userpaginated.model';
import { EndPointsService } from './end-points.service';

const baseUrl = 'http://localhost:5043/api/LettersTypes/CreateLetterType';

//const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTU1NDUwMTEsImV4cCI6MTcxNTYzMTQxMSwiaWF0IjoxNzE1NTQ1MDExfQ.mFk_0FLKQWLyC7JUe_0agKscveW9U6jWKwR7j7rTU8o'

const token=localStorage.getItem("token")


let header = new HttpHeaders().set("Authorization", 'Bearer ' + token);
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  
  create(data: any): Observable<any> {
  

    return this.http.post(baseUrl , data, {
      headers: header
    });
  }

  addUser(model: any) {
    return this.http.post<BaseResponse<boolean>>(
      EndPointsService.baseUrl + EndPointsService.User.add,
      model, {
        headers: header
      }
    );
  }
  searchUsers(searchModel: PagnationRequest) {
    return this.http.post<BaseResponse<UserPaginatedModel>>(
      EndPointsService.baseUrl + EndPointsService.User.list,
      searchModel
    );
  }

  getUserId(id: string) {
    let model = { Id: id };

    return this.http.post<BaseResponse<UserModel>>(
      EndPointsService.baseUrl + EndPointsService.User.getById,model,
      
      {
       headers: header
     }
    );
  } 
  deleteUser(id: string) {
    let model = { Id: id };
     return this.http.post<BaseResponse<boolean>>(
      EndPointsService.baseUrl + EndPointsService.User.archive 
,model
      ,
       {
        headers: header
      }
    );
  }


  ActivateUser(id: string) {
    let model = { Id: id };
     return this.http.post<BaseResponse<boolean>>(
      EndPointsService.baseUrl + EndPointsService.User.activate 
,model
      ,
       {
        headers: header
      }
    );
  }

  DeActivateUser(id: string) {
    let model = { Id: id };
     return this.http.post<BaseResponse<boolean>>(
      EndPointsService.baseUrl + EndPointsService.User.deactivate 
,model
      ,
       {
        headers: header
      }
    );
  }

  updateUser(model: any) {
    return this.http.post<BaseResponse<boolean>>(
      EndPointsService.baseUrl + EndPointsService.User.edit,
      model, {
        headers: header
      }
    );
  }

}

