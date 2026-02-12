import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from '../models/base.response';
import { PagnationRequest } from '../models/pagination.request';
import { EndPointsService } from './end-points.service';
import { RoyalGrantPaginatedModel } from '../models/RoyalGrant/RoyalGrantpaginated.model';
import { environment } from '../../environments/environment';
import { AttachmentResModel } from '../models/Attachments/AttachmentRes.model';
import { RoyalGrantModel } from '../models/RoyalGrant/RoyalGrant.model';
import { MilestoneModel } from '../models/Milestone/Milestone.model';
import { DirectiveGoalModel } from '../models/DirectiveGoals/DirectiveGoals.model';
import { DepartmentModel } from '../models/Departments/Department.model';
import { DepartmentpaginatedModel } from '../models/Departments/Departmentpaginated.model';
import { employee } from '../models/Employee/Employee.model';
import { EmployeepaginatedModel } from '../models/Employee/Employeepaginated.model';
import { ServiceModel } from '../models/Service/Service.model';
import { ServicePaginatedModel } from '../models/Service/Servicepaginated.model';

//const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTU1NDUwMTEsImV4cCI6MTcxNTYzMTQxMSwiaWF0IjoxNzE1NTQ1MDExfQ.mFk_0FLKQWLyC7JUe_0agKscveW9U6jWKwR7j7rTU8o'

const token=localStorage.getItem("token")


let header = new HttpHeaders().set("Authorization", 'Bearer ' + token);

@Injectable({
  providedIn: 'root'
})
export class  ServicesService {
  constructor(private http: HttpClient) {}
  
  
  addService(model: any) {
    //const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTUxMTQwNTEsImV4cCI6MTcxNTIwMDQ1MSwiaWF0IjoxNzE1MTE0MDUxfQ.jRWNrHAQ_x_q6ZXVlJyRRk4hzhbsiuSA_ULI33FNDgM'
    //let header = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    return this.http.post<BaseResponse<ServiceModel>>(
      EndPointsService.baseUrl + EndPointsService.Service.add,
      model, {
        headers: header
      }
    );
  }
  searchService(searchModel: PagnationRequest) {
    return this.http.post<BaseResponse<ServicePaginatedModel>>(
      EndPointsService.baseUrl + EndPointsService.Service.list,
      searchModel
    );
  }
  deleteService(id: string) {
    let model = { Id: id };
     return this.http.post<BaseResponse<boolean>>(
     // EndPointsService.baseUrl + EndPointsService.LettersTypes.delete + "?Id=" + id
      EndPointsService.baseUrl + EndPointsService.Service.delete 
,model
      ,
       {
        headers: header
      }
    );
  }


  updateService(model: any) {
    return this.http.post<BaseResponse<boolean>>(
      EndPointsService.baseUrl + EndPointsService.Service.edit,
      model, {
        headers: header
      }
    );
  }


  getById(id: string) {
    let model = { Id: id };

    return this.http.post<BaseResponse<ServiceModel>>(
      EndPointsService.baseUrl + EndPointsService.Service.getById,model,
      
      {
       headers: header
     }
    );
  } 
}

