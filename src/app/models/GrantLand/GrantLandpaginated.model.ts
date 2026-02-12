import { PaginationResponse } from "../pagination.response";
import { GrantLandModel } from "./GrantLand.model";

export interface GrantLandpaginatedModel
  extends PaginationResponse<GrantLandModel> {}