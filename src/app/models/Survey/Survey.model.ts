export interface SurveyModel {
    id:string;
    surveyName: string;
    surveyDesc: string;
    fromDate: Date;
    toDate:Date;
    fromDateStr: string;
    toDateStr:string;
    sortable: boolean;
    questionIds:string[];
questNames:string[];
surveyQr:string;



  
  }