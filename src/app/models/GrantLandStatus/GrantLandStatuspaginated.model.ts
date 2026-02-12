import { PaginationResponse } from "../pagination.response";
import { GrantLandStatusModel } from "./GrantLandStatus.model";

export interface GrantLandStatuspaginatedModel
  extends PaginationResponse<GrantLandStatusModel> {}