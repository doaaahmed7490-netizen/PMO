import { PaginationResponse } from "../pagination.response";
import { PrivilageModel } from "./Privilage.model";
import { RoleModel } from "./role.model";
import { UserModel } from "./User.model";

export interface RolePaginatedModel
  extends PaginationResponse<RoleModel> {}