import { PaginationResponse } from "../pagination.response";
import { GrantStepModel } from "./GrantStep.model";

export interface GrantStepPaginatedModel
  extends PaginationResponse<GrantStepModel> {}