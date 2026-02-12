import { PaginationResponse } from "../pagination.response";
import { PartBlockModel } from "./PartBlocks.model";

export interface PartBlockPaginatedModel
  extends PaginationResponse<PartBlockModel> {}