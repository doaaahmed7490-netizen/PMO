import { PaginationResponse } from "../pagination.response";
import { GrantsModel } from "./Grants.mode";

export interface GrantPaginatedModel
  extends PaginationResponse<GrantsModel> {}