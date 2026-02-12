import { PaginationResponse } from "../pagination.response";
import { RoyalGrantModel } from "./RoyalGrant.model";

export interface RoyalGrantPaginatedModel
  extends PaginationResponse<RoyalGrantModel> {}