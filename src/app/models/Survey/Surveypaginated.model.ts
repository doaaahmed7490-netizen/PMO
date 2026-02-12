import { PaginationResponse } from "../pagination.response";
import { SurveyModel } from "./Survey.model";

export interface SurveyPaginatedModel
  extends PaginationResponse<SurveyModel> {}