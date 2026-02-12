import { PaginationResponse } from "../pagination.response";
import { PlanModel } from "./Plan.model";

export interface PlanPaginatedModel
  extends PaginationResponse<PlanModel> {}