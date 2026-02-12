import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from '../models/base.response';
import { DistrictModel } from '../models/District/District.model';
import { DistrictpaginatedModel } from '../models/District/Districtpaginated.model';
import { PagnationRequest } from '../models/pagination.request';
import { EndPointsService } from './end-points.service';
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTU1NDUwMTEsImV4cCI6MTcxNTYzMTQxMSwiaWF0IjoxNzE1NTQ1MDExfQ.mFk_0FLKQWLyC7JUe_0agKscveW9U6jWKwR7j7rTU8o'
let header = new HttpHeaders().set("Authorization", 'Bearer ' + token);
@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  constructor(private http: HttpClient) {}
  
  
  addDistrict(model: any) {
   
    return this.http.post<BaseResponse<boolean>>(
      EndPointsService.baseUrl + EndPointsService.District.add,
      model, {
        headers: header
      }
    );
  }
  searchDistrict(searchModel: PagnationRequest) {
    return this.http.post<BaseResponse<DistrictpaginatedModel>>(
      EndPointsService.baseUrl + EndPointsService.District.list,
      searchModel
    );
  }
  deleteDistrict(id: string) {
    let model = { Id: id };
     return this.http.post<BaseResponse<boolean>>(
     // EndPointsService.baseUrl + EndPointsService.LettersTypes.delete + "?Id=" + id
      EndPointsService.baseUrl + EndPointsService.District.delete 
,model
      ,
       {
        headers: header
      }
    );
  }


/*  addLetterType(model: any) {
    return this.http.post<BaseResponse<boolean>>(
      EndPoints.baseUrl + EndPoints.LettersTypes.add,
      model
    );
  }*/
  updateDistrict(model: any) {
    return this.http.post<BaseResponse<boolean>>(
      EndPointsService.baseUrl + EndPointsService.District.edit,
      model, {
        headers: header
      }
    );
  }
  getDistrictById(id: string) {
    let model = { Id: id };

    return this.http.post<BaseResponse<DistrictModel>>(
      EndPointsService.baseUrl + EndPointsService.District.getById,model,
      
      {
       headers: header
     }
    );
  } 
}
