import { PaginationResponse } from "../pagination.response";
import { GrantWorkFlowModel } from "./GrantWorkFlow.model";

export interface GrantWorkFlowpaginated
  extends PaginationResponse<GrantWorkFlowModel> {}