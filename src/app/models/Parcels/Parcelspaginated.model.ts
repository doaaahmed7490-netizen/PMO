import { PaginationResponse } from "../pagination.response";
import { ParcelModel } from "./Parcels.model";

export interface ParcelsPaginatedModel
  extends PaginationResponse<ParcelModel> {}