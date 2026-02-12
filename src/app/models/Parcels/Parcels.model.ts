export interface ParcelModel {
    id:string;
    parcelNo: number;
    blockId: string;
    partId:string
    planId:string;
    blockNo: number;
    partName:string
    planName:string;
    planCode:string
    areaInPlan:number;
    northernBorder?:number;
    northernBorderDesc:string;

    southernBorder:number;
    southernBorderDesc:string;

    westernBorder:number;
    westernBorderDesc:string;

    easternBorder:number;
    easternBorderDesc:string;

    blockArea:number;
    landDegree:number;
    notes:string;
    isRepeated:number;
    parcelFiles: string[];

    sortable: boolean;


  }
  