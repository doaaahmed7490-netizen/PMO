import { AttachmentResModel } from "../Attachments/AttachmentRes.model";
import { LetterModel } from "./LetterModel";

export interface GrantWorkFlowModel {
    id:string;
    grantStepId: string;
    grantStepName: string;
    grantStatusId: string;

    grantStatusName: string;
    grantId:string;
    grantSerial:number;
    letterTypeId: string;
    notes:string;
   // grantWorkFlowFiles: string[];
   grantWorkFlowFiles: AttachmentResModel[];
   
   letterNo: string;
   letterTitle: string;
   letterType: string;

   letterSummary: string;
   letterId: string;

    sortable: boolean;
    recordNum:string;
    recordDate:Date;


  }
  