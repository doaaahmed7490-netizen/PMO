import { PaginationResponse } from "../pagination.response";
import { LetterTypeModel } from "./LetterType.model";

export interface LetterTypePaginatedModel
  extends PaginationResponse<LetterTypeModel> {}