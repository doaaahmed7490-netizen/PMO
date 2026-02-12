export interface DirectiveGoalModel {
  id:string;
  directiveGoal : string;
  directiveGoalDesc : string;
  //noOfParts: number;
  goalCode : number;


  sortable: boolean;
  milestones:Milestone[]
  goalIds:string[];
  goalNames:string[];

}

export interface Milestone {
  id:string;
  milestoneName : string;
  milestoneDesc : string;
  //noOfParts: number;
  GoalCode : number;


  sortable: boolean;
  strategicGoals:StrategicGoals[]
}

export interface StrategicGoals {
  id:string;
  StrategicGoalName : string;
  StrategicGoalDesc : string;
  //noOfParts: number;
  GoalCode : number;


  sortable: boolean;
}




