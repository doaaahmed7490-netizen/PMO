export interface QuestionModel {
    id:string;
    questText: string;
    questDesc: string;
    answerTypeId: string;
    answerType:string;
qstWeight:number;
    ansTypeEnum:number;

    sortable: boolean;
    ischecked:boolean;
serviceIds:string[];
serviceNames:string[];


  
  }