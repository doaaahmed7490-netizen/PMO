import { DepartmentModel } from "../Departments/Department.model";

export interface employee {
    id:string;
    name: string;
    email: string;
    phone: string;
    mobil: string;
    nationalId:string;
    notes:string;
    sortable: boolean;
    department:DepartmentModel[];
    jobId:string;
    jobName:string;
    deptIds:string[];



  
  }
  