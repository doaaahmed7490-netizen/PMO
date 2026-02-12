import { PaginationResponse } from "../pagination.response";
import { DirectiveGoalModel } from "./DirectiveGoals.model";

export interface DirectiveGoalpaginatedModel
  extends PaginationResponse<DirectiveGoalModel> {}