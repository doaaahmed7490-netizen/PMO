import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from '../models/base.response';
import { LandCaseTypeModel } from '../models/LandCasesTypes/LandCaseType.model';
import { LandCaseTypePaginatedModel } from '../models/LandCasesTypes/LandCaseTypepaginated.model';
import { PagnationRequest } from '../models/pagination.request';
import { EndPointsService } from './end-points.service';
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTU1NDUwMTEsImV4cCI6MTcxNTYzMTQxMSwiaWF0IjoxNzE1NTQ1MDExfQ.mFk_0FLKQWLyC7JUe_0agKscveW9U6jWKwR7j7rTU8o'
let header = new HttpHeaders().set("Authorization", 'Bearer ' + token);

@Injectable({
  providedIn: 'root'
})
export class LandCaseTypeService {
  constructor(private http: HttpClient) {}
  
  
  addLandCaseType(model: any) {
    //const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTUxMTQwNTEsImV4cCI6MTcxNTIwMDQ1MSwiaWF0IjoxNzE1MTE0MDUxfQ.jRWNrHAQ_x_q6ZXVlJyRRk4hzhbsiuSA_ULI33FNDgM'
    //let header = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    return this.http.post<BaseResponse<boolean>>(
      EndPointsService.baseUrl + EndPointsService.LandCaseTypes.add,
      model, {
        headers: header
      }
    );
  }
  searchLandCaseType(searchModel: PagnationRequest) {
    return this.http.post<BaseResponse<LandCaseTypePaginatedModel>>(
      EndPointsService.baseUrl + EndPointsService.LandCaseTypes.list,
      searchModel
    );
  }
  deleteLandCaseType(id: string) {
    let model = { Id: id };
     return this.http.post<BaseResponse<boolean>>(
     // EndPointsService.baseUrl + EndPointsService.LettersTypes.delete + "?Id=" + id
      EndPointsService.baseUrl + EndPointsService.LandCaseTypes.delete 
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
  updateLandCaseType(model: any) {
    return this.http.post<BaseResponse<boolean>>(
      EndPointsService.baseUrl + EndPointsService.LandCaseTypes.edit,
      model, {
        headers: header
      }
    );
  }
  getLandCaseTypeById(id: string) {
    let model = { Id: id };

    return this.http.post<BaseResponse<LandCaseTypeModel>>(
      EndPointsService.baseUrl + EndPointsService.LandCaseTypes.getById,model,
      
      {
       headers: header
     }
    );
  } 
}
