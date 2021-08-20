import { WeatherData } from "./../../interface/index";
import { Action } from "../action/index";
import { ActionType } from "../actions-types";

export interface StateRepository {
  data: WeatherData;
  loading: boolean;
  error: string | null;
}

const initialState: StateRepository = {
  data: {} as WeatherData,
  loading: false,
  error: "",
};

export const repositoriesReducer = (
  state = initialState,
  action: Action
): StateRepository => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORY:
      return { data: {} as WeatherData, loading: true, error: null };
    case ActionType.SEARCH_REPOSITORY_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case ActionType.SEARCH_REPOSITORY_ERROR:
      return { data: {} as WeatherData, loading: false, error: action.payload };

    default:
      return state;
  }
};
