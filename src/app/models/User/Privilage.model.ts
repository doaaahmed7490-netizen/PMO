export interface PrivilageModel {
    id:string;
    name:string;
    linkName: string;
    sortable:boolean;
    ischecked:boolean;
    canAdd:boolean;
   canView:boolean;

    canUpdate:boolean;
    canDelete:boolean;
   // viewActionOnly:boolean;
  }
  