import { PaginationResponse } from "../pagination.response";
import { StartegicGoalsModel } from "./StrategicGoals.model";

export interface StartegicGoalsPaginatedModel
  extends PaginationResponse<StartegicGoalsModel> {}