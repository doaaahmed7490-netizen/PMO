import { PaginationResponse } from "../pagination.response";
import { MilestoneModel } from "./Milestone.model";

export interface MilestonePaginatedModel
  extends PaginationResponse<MilestoneModel> {}