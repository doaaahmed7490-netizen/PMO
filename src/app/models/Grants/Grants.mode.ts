import { AttachmentResModel } from "../Attachments/AttachmentRes.model";

export interface GrantsModel {
    id:string;
    grantSerial: number;
    grantType: number;
    royalGrantId:string;
    SupremeOrderNumber:string;
    //noOfParts: number;
    grantedArea:number;
    grantTypeStr:string;
    //grantFiles: string[];
    grantFiles: AttachmentResModel[];

    ownersName:string[];
    ownersData: string[];

    ownersNationalId:string[];

    ownersHafezaId:string[];
mapObjectId:number[];
notes:string;
    sortable: boolean;
  
  
  }
  
  
