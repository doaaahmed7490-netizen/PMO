import { PaginationResponse } from "../pagination.response";
import { ServiceModel } from "./Service.model";

export interface ServicePaginatedModel
  extends PaginationResponse<ServiceModel> {}