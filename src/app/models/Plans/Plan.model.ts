export interface PlanModel {
  id:string;
  planName: string;
  planCode: string;
  //noOfParts: number;

  noOfBlocks: number;
  noOfParcels: number;
  area:number;
  notes: string;
  districtId:string;
  districtName:string;
  //
  engineeringOfficeId:string;
  OfficeName:string;
  //planFiles?: PlanFileModel[];
  postFiles: string[];
  sortable: boolean;


}


export interface PlanFileModel {
  attachmentId: string;
}