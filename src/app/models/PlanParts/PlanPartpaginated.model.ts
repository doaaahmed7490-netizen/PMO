import { PaginationResponse } from "../pagination.response";
import { PlanPartModel } from "./PlanPart.model";

export interface PlanPartPaginatedModel
  extends PaginationResponse<PlanPartModel> {}