import { PaginationResponse } from "../pagination.response";
import { LandCaseTypeModel } from "./LandCaseType.model";

export interface LandCaseTypePaginatedModel
  extends PaginationResponse<LandCaseTypeModel> {}