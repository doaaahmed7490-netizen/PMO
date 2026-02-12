import { DatePipe } from '@angular/common';
import { HttpClient, HttpResponse ,HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from '../models/base.response';
import { LetterTypeModel } from '../models/LetterTypes/LetterType.model';
import { LetterTypePaginatedModel } from '../models/LetterTypes/LetterTypepaginated.model';
import { PagnationRequest } from '../models/pagination.request';
import { BaseService } from './base.service';
import { EndPointsService } from './end-points.service';
const baseUrl = 'http://localhost:5043/api/LettersTypes/CreateLetterType';

const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTU1NDUwMTEsImV4cCI6MTcxNTYzMTQxMSwiaWF0IjoxNzE1NTQ1MDExfQ.mFk_0FLKQWLyC7JUe_0agKscveW9U6jWKwR7j7rTU8o'
let header = new HttpHeaders().set("Authorization", 'Bearer ' + token);
@Injectable({
  providedIn: 'root'
})

export class LetterTypeService {
  constructor(private http: HttpClient) {}
  
  create(data: any): Observable<any> {
   //const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTUxMTQwNTEsImV4cCI6MTcxNTIwMDQ1MSwiaWF0IjoxNzE1MTE0MDUxfQ.jRWNrHAQ_x_q6ZXVlJyRRk4hzhbsiuSA_ULI33FNDgM'
   // let header = new HttpHeaders().set("Authorization", 'Bearer ' + token);
   
  //  return this.http.post(baseUrl, data,header);

    return this.http.post(baseUrl , data, {
      headers: header
    });
  }

  addLetterType(model: any) {
    //const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTUxMTQwNTEsImV4cCI6MTcxNTIwMDQ1MSwiaWF0IjoxNzE1MTE0MDUxfQ.jRWNrHAQ_x_q6ZXVlJyRRk4hzhbsiuSA_ULI33FNDgM'
    //let header = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    return this.http.post<BaseResponse<boolean>>(
      EndPointsService.baseUrl + EndPointsService.LettersTypes.add,
      model, {
        headers: header
      }
    );
  }
  searchLetterType(searchModel: PagnationRequest) {
    return this.http.post<BaseResponse<LetterTypePaginatedModel>>(
      EndPointsService.baseUrl + EndPointsService.LettersTypes.list,
      searchModel
    );
  }
  deleteLetterType(id: string) {
    let model = { Id: id };
     return this.http.post<BaseResponse<boolean>>(
     // EndPointsService.baseUrl + EndPointsService.LettersTypes.delete + "?Id=" + id
      EndPointsService.baseUrl + EndPointsService.LettersTypes.delete 
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
  updateLetterType(model: any) {
    return this.http.post<BaseResponse<boolean>>(
      EndPointsService.baseUrl + EndPointsService.LettersTypes.edit,
      model, {
        headers: header
      }
    );
  }
  getLetterTypeById(id: string) {
    let model = { Id: id };

    return this.http.post<BaseResponse<LetterTypeModel>>(
      EndPointsService.baseUrl + EndPointsService.LettersTypes.getById,model,
      
      {
       headers: header
     }
    );
  } 
}
