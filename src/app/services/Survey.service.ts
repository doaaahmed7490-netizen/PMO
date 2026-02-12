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
import { QuestionModel } from '../models/Quest/Question.model';
import { QuestPaginatedModel } from '../models/Quest/Questpaginated.model';
import { AnswerTypeModel } from '../models/Quest/AnswerType.model';
import { SurveyPaginatedModel } from '../models/Survey/Surveypaginated.model';
import { SurveyModel } from '../models/Survey/Survey.model';
import { PagnationRequestWithId } from '../models/paginationWithId.request';
import { SurveyQstAnalysis } from '../models/Survey/SurveyQstAnlysis.model';
import { catchError, Observable, tap, throwError } from 'rxjs';

//const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTU1NDUwMTEsImV4cCI6MTcxNTYzMTQxMSwiaWF0IjoxNzE1NTQ1MDExfQ.mFk_0FLKQWLyC7JUe_0agKscveW9U6jWKwR7j7rTU8o'
const token=localStorage.getItem("token")


let header = new HttpHeaders().set("Authorization", 'Bearer ' + token);

@Injectable({
  providedIn: 'root'
})
export class  SurveyService {

  public getIPAddress()  
  {  
    return this.http.get("http://api.ipify.org/?format=json");  
  }
  constructor(private http: HttpClient) {}
  
  getIpCliente() {
    this.http.get<any>('https://geolocation-db.com/json/').subscribe(

      (res) => {
   
  res
      });

  /*.pipe(
    catchError(err => {
      return throwError(err);
    }),
    tap(response => {
      console.log(response.IPv4);
    })
  )*/
  /*  return this.http
               .get('http://api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK').
               .map((res: Response) => {
                 console.log('res ', res);
                 console.log('res.json() ', res.text());
                 console.log('parseado  stringify ', JSON.stringify(res.text()));
                 let ipVar = res.text();
                 let num = ipVar.indexOf(":");
                 let num2 = ipVar.indexOf("\"});");
                 ipVar = ipVar.slice(num+2,num2);
  
                 return ipVar
               }
    );
    */
  }
  addSurvey(model: any) {
    //const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTUxMTQwNTEsImV4cCI6MTcxNTIwMDQ1MSwiaWF0IjoxNzE1MTE0MDUxfQ.jRWNrHAQ_x_q6ZXVlJyRRk4hzhbsiuSA_ULI33FNDgM'
    //let header = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    return this.http.post<BaseResponse<ServiceModel>>(
      EndPointsService.baseUrl + EndPointsService.Survey.add,
      model, {
        headers: header
      }
    );
  }
  submitSurvey(model: any) {
    //const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTUxMTQwNTEsImV4cCI6MTcxNTIwMDQ1MSwiaWF0IjoxNzE1MTE0MDUxfQ.jRWNrHAQ_x_q6ZXVlJyRRk4hzhbsiuSA_ULI33FNDgM'
    //let header = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    return this.http.post<BaseResponse<string>>(
      EndPointsService.baseUrl + EndPointsService.SurveyResponse.SubmitSurvey,
      model, {
        headers: header
      }
    );
  }

  CheckIfIPAddreSubmitSurveyOrNot(id:string,ip:string)
  {
    //const apiUrl=environment.apiUrl+'Plans/GetAllPlanFiles?Id='+id
    const apiUrl=environment.apiUrl+'Survey/CheckIfIpAddressExistsForSpecificSurveyOrNOT?SurveyId='+id+'&&IpAddress='+ip;

    return this.http.get<boolean>(apiUrl)
  }
  searchSurveys(searchModel: PagnationRequest) {
    return this.http.post<BaseResponse<SurveyPaginatedModel>>(
      EndPointsService.baseUrl + EndPointsService.Survey.list,
      searchModel
    );
  }
  deleteSurvey(id: string) {
    let model = { Id: id };
     return this.http.post<BaseResponse<boolean>>(
     // EndPointsService.baseUrl + EndPointsService.LettersTypes.delete + "?Id=" + id
      EndPointsService.baseUrl + EndPointsService.Survey.delete 
,model
      ,
       {
        headers: header
      }
    );
  }


  updateSurvey(model: any) {
    return this.http.post<BaseResponse<boolean>>(
      EndPointsService.baseUrl + EndPointsService.Survey.edit,
      model, {
        headers: header
      }
    );
  }

//getByIdForUser
getByIdForUser(id: string) {
  let model = { Id: id };

  return this.http.post<BaseResponse<SurveyModel>>(
    EndPointsService.baseUrl + EndPointsService.Survey.getByIdForUser,model,
    
    {
     headers: header
   }
  );
} 
  getById(id: string) {
    let model = { Id: id };

    return this.http.post<BaseResponse<SurveyModel>>(
      EndPointsService.baseUrl + EndPointsService.Survey.getById,model,
      
      {
       headers: header
     }
    );
  } 
  GetQuestionsBySurvey(searchModel: PagnationRequestWithId) {
    return this.http.post<BaseResponse<QuestPaginatedModel>>(
      EndPointsService.baseUrl + EndPointsService.Survey.listQstBySurvey,
      searchModel
    );
  }


  GetAllSurveyQstAnalysis(id:string)
  {
    const apiUrl=environment.apiUrl+'SurveyResponse/GetQuestSurveyAnalysis?Id='+id
    return this.http.get<SurveyQstAnalysis[]>(apiUrl)
  }
}

