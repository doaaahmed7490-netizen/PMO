import { PaginationResponse } from "../pagination.response";
import { OwnerModel } from "./owner.model";

export interface OwnersPaginatedModel
  extends PaginationResponse<OwnerModel> {}