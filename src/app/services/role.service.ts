import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from '../models/base.response';
import { PagnationRequest } from '../models/pagination.request';
import { EndPointsService } from './end-points.service';
import { RoyalGrantPaginatedModel } from '../models/RoyalGrant/RoyalGrantpaginated.model';
import { environment } from '../../environments/environment';
import { AttachmentResModel } from '../models/Attachments/AttachmentRes.model';
import { RoyalGrantModel } from '../models/RoyalGrant/RoyalGrant.model';
import { GrantPaginatedModel } from '../models/Grants/Grantpaginated.model';
import { GrantsModel } from '../models/Grants/Grants.mode';
import { PrivilagePaginatedModel } from '../models/User/PrivilagePaginated.model';
import { PagnationRequestWithId } from '../models/paginationWithId.request';
import { RolePaginatedModel } from '../models/User/RolePaginated.model';
import { RoleModel } from '../models/User/role.model';
import { MenuModel } from '../models/User/menu.model';
import { LanguageService } from '../components/navbar/language.service';
import { PrivilageActionPaginatedModel } from '../models/User/PrivilageActionPag.model';
import { PrivilageRoleModel } from '../models/User/PrivilageRoleModel';
import { PagnationRequestWithFilter } from '../models/PagnationWithFilter.model';

//const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTU1NDUwMTEsImV4cCI6MTcxNTYzMTQxMSwiaWF0IjoxNzE1NTQ1MDExfQ.mFk_0FLKQWLyC7JUe_0agKscveW9U6jWKwR7j7rTU8o'

const token = localStorage.getItem('token');

let header = new HttpHeaders().set('Authorization', 'Bearer ' + token);

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {}

  addRole(model: any) {
    //const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTUxMTQwNTEsImV4cCI6MTcxNTIwMDQ1MSwiaWF0IjoxNzE1MTE0MDUxfQ.jRWNrHAQ_x_q6ZXVlJyRRk4hzhbsiuSA_ULI33FNDgM'
    //let header = new HttpHeaders().set("Authorization", 'Bearer ' + token);
    return this.http.post<BaseResponse<boolean>>(
      EndPointsService.baseUrl + EndPointsService.Role.add,
      model,
      {
        headers: header,
      }
    );
  }
  ListAllPrivlages(searchModel: PagnationRequest) {
    return this.http.post<BaseResponse<PrivilagePaginatedModel>>(
      EndPointsService.baseUrl + EndPointsService.Role.ListPrivilages,
      searchModel
    );
  }

  ListAllPrivlagesByRoleId(searchModel: PagnationRequestWithId) {
    return this.http.post<BaseResponse<PrivilagePaginatedModel>>(
      EndPointsService.baseUrl + EndPointsService.Role.ListPrivilagesByRoleId,
      searchModel
    );
  }

  ListAllPrivlagesActionByRoleId(searchModel: PagnationRequestWithId) {
    return this.http.post<BaseResponse<PrivilageActionPaginatedModel>>(
      EndPointsService.baseUrl +
        EndPointsService.Role.ListCustomPrivilagesActionsByRoleId,
      searchModel
    );
  }
  ListAllPrivlagesFilterByRoleId(searchModel: PagnationRequestWithId) {
    return this.http.post<BaseResponse<PrivilagePaginatedModel>>(
      EndPointsService.baseUrl +
        EndPointsService.Role.ListPrivilagesFilterByRoleId,
      searchModel
    );
  }
  ListRoles(searchModel: PagnationRequest) {
    return this.http.post<BaseResponse<RolePaginatedModel>>(
      EndPointsService.baseUrl + EndPointsService.Role.list,
      searchModel
    );
  }

  /*  addLetterType(model: any) {
    return this.http.post<BaseResponse<boolean>>(
      EndPoints.baseUrl + EndPoints.LettersTypes.add,
      model
    );
  }*/

  updateRole(model: any) {
    return this.http.post<BaseResponse<boolean>>(
      EndPointsService.baseUrl + EndPointsService.Role.edit,
      model,
      {
        headers: header,
      }
    );
  }

  loadmenu(Id: string, lang: string) {
    const apiUrl = environment.apiUrl + 'Role/LoadMenu?Id=' + Id + '&&lang='+lang;
    //this.languageService.currentLanguage;

    return this.http.get<MenuModel[]>(apiUrl);
  }

  getById(id: string) {
    let model = { Id: id };

    return this.http.post<BaseResponse<RoleModel>>(
      EndPointsService.baseUrl + EndPointsService.Role.getById,
      model,

      {
        headers: header,
      }
    );
  }
  getActionByRoleId(id: string, privilageName: string) {
    let model = { Id: id, PrivilageName: privilageName };

    return this.http.post<BaseResponse<PrivilageRoleModel>>(
      EndPointsService.baseUrl +
        EndPointsService.Role.getPrivilageActiobByRoleId,
      model,

      {
        headers: header,
      }
    );
  }
  /*
  getGrantsNotAllocated(id:string)
  {
    const apiUrl=environment.apiUrl+'Grants/GetGrantsWithOwnersNotAllocated?Id='+id
    return this.http.get<GrantsNotAllocated[]>(apiUrl)
  }
*/
  ListLettersOrReportsDependOnRole(searchModel: PagnationRequestWithFilter) {
    return this.http.post<BaseResponse<PrivilagePaginatedModel>>(
      EndPointsService.baseUrl + EndPointsService.Role.GetLettersOrReports,
      searchModel
    );
  }
}
