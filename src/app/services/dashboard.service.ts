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
//import { DashboardDtoModel, DashboardPrecentageDtoModel } from '../models/Dashboard/DashboardPrecentageDto.model';
import { Observable } from 'rxjs';
import { StatisticsCountmodel } from '../models/Dashboard/StatisticsCount.model';
import { DashboardDtoModel } from '../models/Dashboard/dashboardDto.model';
import { DashboardPrecentageDtoModel } from '../models/Dashboard/DashboardPrecentageDto.model';

const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTU1NDUwMTEsImV4cCI6MTcxNTYzMTQxMSwiaWF0IjoxNzE1NTQ1MDExfQ.mFk_0FLKQWLyC7JUe_0agKscveW9U6jWKwR7j7rTU8o'
let header = new HttpHeaders().set("Authorization", 'Bearer ' + token);

@Injectable({
  providedIn: 'root'
})
export class  DashboardService {
  constructor(private http: HttpClient) {}
  
  getAllCriteriaForSearch(Type:Number)
  {
    const apiUrl=environment.apiUrl+'Dashboard/DashboardGetAllForSearch?Type='+Type
    return this.http.get<DashboardDtoModel[]>(apiUrl)
  }
  
//Observable<any[]
getAllCriteriaForSearch2(Type:Number)
{
  const apiUrl=environment.apiUrl+'Dashboard/DashboardGetAllForSearch?Type='+Type
  return this.http.get<Observable<DashboardDtoModel[]>>(apiUrl)
}


getStasticsCount() {

  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipants'
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)

} 


getStasticsCountInPeriod(From:Date,To:Date) {

  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipantsInPeriod?=FromDate'+From+'&ToDate='+To
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)

} 
getStasticsCountInPeriodForStrategic(Id:string,From:Date,To:Date) {

  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipantsInPeriodForStrategic?StartegicGoalId='+Id+'&FromDate='+From+'&ToDate='+To
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)

} 
getStasticsCountForStrategic(Id:string) {

  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipantsForStrategic?StartegicGoalId='+Id
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)

} 

getStasticsCountInPeriodForMilestone(Id:string,From:Date,To:Date) {

  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipantsInPeriodForMileStone?MileStoneId='+Id+'&FromDate='+From+'&ToDate='+To
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)

} 
getStasticsCountForMilestone(Id:string) {

  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipantsForMileStone?MileStoneId='+Id
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)

} 


getStasticsCountInPeriodForDirective(Id:string,From:Date,To:Date) {

  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipantsInPeriodForDirective?DirectiveId='+Id+'&FromDate='+From+'&ToDate='+To
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)

} 

getStasticsCountForDirective(Id:string) {

  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipantsForDirective?DirectiveId='+Id
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)

} 
getStasticsCountInPeriodForService(Id:string,From:Date,To:Date) {
  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipantsInPeriodForService?ServiceId='+Id+'&FromDate='+From+'&ToDate='+To
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)
} 

getStasticsCountForService(Id:string) {
  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipantsForService?ServiceId='+Id
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)
}

getStasticsCountInPeriodForSurvey(Id:string,From:Date,To:Date) {
  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipantsInPeriodForSurvey?SurveyId='+Id+'&FromDate='+From+'&ToDate='+To
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)
} 

getStasticsCountForSurvey(Id:string) {
  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipantsForSurvey?SurveyId='+Id
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)
}


getStasticsCountInPeriodForDept(Id:string,From:Date,To:Date) {
  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipantsInPeriodForDept?DeptId='+Id+'&FromDate='+From+'&ToDate='+To
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)
} 

getStasticsCountForDept(Id:string) {
  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipantsForDept?DeptId='+Id
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)
}


getStasticsCountInPeriodForEmployee(Id:string,From:Date,To:Date) {
  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipantsInPeriodForEmployee?EmpId='+Id+'&FromDate='+From+'&ToDate='+To
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)
} 

getStasticsCountForEmployee(Id:string) {
  const apiUrl=environment.apiUrl+'Dashboard/GetStatisticsForParticipantsForEmp?EmpId='+Id
  return this.http.get<BaseResponse<StatisticsCountmodel>>(apiUrl)
}

getStasticsDashboardPrecentage() {
  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatistics'
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)
}

getStasticsDashboardPrecentageInPeriod(From:Date,To:Date) {

  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatisticsInPeriod?=FromDate'+From+'&ToDate='+To
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)


} 

getStasticsDashboardPrecentageForStrategic(Id:string) {
  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatisticsForStrategic?StartegicGoalId='+Id
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)
}


getStasticsDashboardPrecentageForStrategicInPeriod(Id:string,From:Date,To:Date) {
  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatisticsForStrategicInPeriod?StartegicGoalId='+Id+'&FromDate='+From+'&ToDate='+To
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)
} 

getDashboardStatisticsForMilestone(Id:string) {
  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatisticsForMilestone?MilestoneId='+Id
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)
}

getStasticsDashboardPrecentageForMilestoneInPeriod(Id:string,From:Date,To:Date) {
  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatisticsForMilestoneInPeriod?MilestoneId='+Id+'&FromDate='+From+'&ToDate='+To
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)
} 


getDashboardStatisticsForDirective(Id:string) {
  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatisticsForDirective?DirectiveId='+Id
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)
}

getStasticsDashboardPrecentageForDirectiveInPeriod(Id:string,From:Date,To:Date) {
  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatisticsForDirectiveInPeriod?DirectiveId='+Id+'&FromDate='+From+'&ToDate='+To
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)
} 


DashboardStatisticsForService(Id:string) {
  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatisticsForService?ServiceId='+Id
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)
}

getStasticsDashboardPrecentageForServiceInPeriod(Id:string,From:Date,To:Date) {
  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatisticsForServiceInPeriod?ServiceId='+Id+'&FromDate='+From+'&ToDate='+To
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)
} 

DashboardStatisticsForSurvey(Id:string) {
  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatisticsForSurvey?SurveyId='+Id
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)
}


getStasticsDashboardPrecentageForSurveyInPeriod(Id:string,From:Date,To:Date) {
  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatisticsForSurveyInPeriod?SurveyId='+Id+'&FromDate='+From+'&ToDate='+To
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)
} 


DashboardStatisticsForDept(Id:string) {
  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatisticsForDeptId?DeptId='+Id
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)
}


getStasticsDashboardPrecentageForDeptInPeriod(Id:string,From:Date,To:Date) {
  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatisticsForDeptInPeriod?DeptId='+Id+'&FromDate='+From+'&ToDate='+To
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)
} 


DashboardStatisticsForEmp(Id:string) {
  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatisticsForEmpId?EmpId='+Id
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)
}


getStasticsDashboardPrecentageForEmpInPeriod(Id:string,From:Date,To:Date) {
  const apiUrl=environment.apiUrl+'Dashboard/DashboardStatisticsForEmpIdInPeriod?EmpId='+Id+'&FromDate='+From+'&ToDate='+To
  return this.http.get<BaseResponse<DashboardPrecentageDtoModel>>(apiUrl)
} 
}

