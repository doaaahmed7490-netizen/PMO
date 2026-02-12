import { PaginationResponse } from "../pagination.response";
import { BlockModel } from "./Block.model";

export interface  BlockPaginatedModel
  extends PaginationResponse<BlockModel> {}