import { PaginationResponse } from "../pagination.response";
import { PrivilageModel } from "./Privilage.model";
import { PrivilageRoleModel } from "./PrivilageRoleModel";
import { UserModel } from "./User.model";

export interface PrivilageActionPaginatedModel
  extends PaginationResponse<PrivilageRoleModel> {}