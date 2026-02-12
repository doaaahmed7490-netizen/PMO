import { AttachmentResModel } from "../Attachments/AttachmentRes.model";

export interface GrantLandModel {
    id:string;
    grantId: string;
    grantSerial: number;
    royalGrantId: string;

    supremeOrderNumber: string;
    planId: string;

    planName: string;
    planCode: string;
    landId: string;
    parcelNo:number;
    partId: string;

    partName: string;

    blockId: string;

    blockNo: number;
    //parcelNo:number;
    areaInPlan: number;
    allocatedArea: number;
    actualArea: number;
    grantedArea: number;

    notes: string;
    sortable: boolean;
    grantLandsFiles:AttachmentResModel[],
    mapObjectId:number
}