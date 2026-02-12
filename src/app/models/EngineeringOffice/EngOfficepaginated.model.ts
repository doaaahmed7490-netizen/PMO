import { PaginationResponse } from "../pagination.response";
import { EngOfficeModel } from "./EngOffice.model";

export interface EngOfficepaginatedModel
  extends PaginationResponse<EngOfficeModel> {}