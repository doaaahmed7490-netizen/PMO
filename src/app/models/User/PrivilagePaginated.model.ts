import { PaginationResponse } from "../pagination.response";
import { PrivilageModel } from "./Privilage.model";
import { UserModel } from "./User.model";

export interface PrivilagePaginatedModel
  extends PaginationResponse<PrivilageModel> {}