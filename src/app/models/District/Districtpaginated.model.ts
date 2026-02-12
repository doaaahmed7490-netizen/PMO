import { PaginationResponse } from "../pagination.response";
import { DistrictModel } from "./District.model";

export interface DistrictpaginatedModel
  extends PaginationResponse<DistrictModel> {}