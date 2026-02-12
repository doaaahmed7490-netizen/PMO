export interface MilestoneModel {
  id:string;
  milestoneName : string;
  milestoneDesc : string;
  //noOfParts: number;
  goalCode : number;


  sortable: boolean;
  strategicGoals:StrategicGoals[]
  goalIds:string[];
  goalNames:string[];

}

export interface StrategicGoals {
  id:string;
  StrategicGoalName : string;
  StrategicGoalDesc : string;
  //noOfParts: number;
  GoalCode : number;


  sortable: boolean;
}


