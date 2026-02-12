import { PaginationResponse } from "../pagination.response";
import { UserModel } from "./User.model";

export interface UserPaginatedModel
  extends PaginationResponse<UserModel> {}