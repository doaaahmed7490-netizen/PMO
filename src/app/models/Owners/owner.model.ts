export interface OwnerModel {
    id:string;
    name: string;
    phone: string;
    mobil: string;

    email:string
    fax:string;
    birthDate:Date;
    birthPlace:string
    birthDateName:string

    nationalId:number;
    nationalDate:Date;
    nationalSourceId:string;
    nationalSource:string;

    hafezaId:string;
    hafezaDate:Date;
    hafezaSourceId:string;
    hafezaSource:string;

  
    notes:string;
    ownerFiles: string[];
    sortable: boolean;
    ischecked:boolean;


  }
  