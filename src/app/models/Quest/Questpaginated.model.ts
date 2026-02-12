import { PaginationResponse } from "../pagination.response";
import { QuestionModel } from "./Question.model";

export interface QuestPaginatedModel
  extends PaginationResponse<QuestionModel> {}