import { WeatherData } from './../../interface/index';
import { Action } from "../action/index";
import { ActionType } from "../actions-types";

export interface StateRepository {
  data: WeatherData;
  loading: boolean;
  error: string | null;
}

const initialState: StateRepository = {
  data: <WeatherData>{},
  loading: false,
  error: "",
};

export const repositoriesReducer = (
  state = initialState,
  action: Action
): StateRepository => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORY:
      return { data: <WeatherData>{}, loading: true, error: null };
    case ActionType.SEARCH_REPOSITORY_SUCCESS:
      console.log(action.payload)
      return { data: action.payload, loading: false, error: null };
    case ActionType.SEARCH_REPOSITORY_ERROR:
      return { data: <WeatherData>{}, loading: false, error: action.payload };

    default:
      return state;
  }
};
