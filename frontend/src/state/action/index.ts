import { WeatherData } from './../../interface/index';
import { ActionType } from "./../actions-types/index";

interface SearchRepositoryType {
  type: ActionType.SEARCH_REPOSITORY;
}
interface SearchRepositorySuccessType {
  type: ActionType.SEARCH_REPOSITORY_SUCCESS;
  payload: WeatherData;
}
interface SearchRepositoryErrorType {
  type: ActionType.SEARCH_REPOSITORY_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoryType
  | SearchRepositorySuccessType
  | SearchRepositoryErrorType;
