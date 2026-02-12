import { PaginationResponse } from "../pagination.response";
import { PartModel } from "./Part.model";

export interface PartPaginatedModel
  extends PaginationResponse<PartModel> {}