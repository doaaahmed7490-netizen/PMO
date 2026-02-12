import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";
import { AttachmentModel } from "../models/Attachments/attachment.model";
import { BaseResponse } from "../models/base.response";
import { EndPointsService } from "./end-points.service";
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0MmZiZTI5Zi04NzFkLWUxNGUtODdlMS0xNTMyMmNiNjkwMGMiLCJnaXZlbl9uYW1lIjoiRG9hYSBhaG1lZCAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6IjAxMTQ1MjM2NTQyIiwidW5pcXVlX25hbWUiOiJEb2FhQDIwMjUiLCJuYmYiOjE3MTU1NDUwMTEsImV4cCI6MTcxNTYzMTQxMSwiaWF0IjoxNzE1NTQ1MDExfQ.mFk_0FLKQWLyC7JUe_0agKscveW9U6jWKwR7j7rTU8o'
let header = new HttpHeaders().set("Authorization", 'Bearer ' + token);
@Injectable({
  providedIn: "root",
})


export class FileService {
  constructor(private http: HttpClient) {}
  private filesBaseUrl = environment.filesBaseUrl;

  private AppBaseUrl = environment.apiUrl;


  addattachment(model: any) {
    return this.http.post<BaseResponse<AttachmentModel>>(
      EndPointsService.baseUrl + EndPointsService.Attachment.add,
      model, {
        headers: header
      }
    );
  }

  
  UpdateAttachment(model: any) {
    return this.http.post<BaseResponse<AttachmentModel>>(
      EndPointsService.baseUrl + EndPointsService.Attachment.edit,
      model, {
        headers: header
      }
    );
  }
  uploadImage(file,Id): Observable<any> {
    var fileTypes = [".jpg", ".jpeg", ".png", ".gif",".pdf"]; //acceptable file types
    let extension = "." + file.name.split(".").pop();
    let formData = new FormData();
    formData.append("file", file);
   // formData.append("ID", Id);

   
   if (!fileTypes.some((c) => c == extension)) {
      return throwError("Invalid file type.");
    } else {
      return this.http.post(
      //  this.filesBaseUrl + "EverUpload/UploadAppGis?ID="+Id,
//        this.filesBaseUrl + "Attachment/UploadFiles?ID="+Id,
        this.filesBaseUrl + "EverUpload/UploadAppGis?ID="+Id,

        formData
        /*,{
          headers: header
        }*/
      );
    }
  }

  downloadFile(fileId: string): Observable<any> {
    return this.http.get(
      this.filesBaseUrl + "Documents/DownloadFileById/" + fileId
    );
  }
}
