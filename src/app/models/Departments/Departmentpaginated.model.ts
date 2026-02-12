import { PaginationResponse } from "../pagination.response";
import { DepartmentModel } from "./Department.model";

export interface DepartmentpaginatedModel
  extends PaginationResponse<DepartmentModel> {}