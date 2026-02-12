import { PaginationResponse } from "../pagination.response";
import { employee } from "./Employee.model";

export interface EmployeepaginatedModel
  extends PaginationResponse<employee> {}