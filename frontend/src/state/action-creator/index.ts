import { ActionType } from "../actions-types";
import { Action } from "../action";
import axios from "axios";
import { Dispatch } from "redux";
import { WeatherData } from "../../interface";

export const searchRepositories = (term: string) => {
  return async (dispacth: Dispatch<Action>) => {
    dispacth({
      type: ActionType.SEARCH_REPOSITORY,
    });

    try {
      const { data } = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=ca0873a42d04802307eab7bfa6d10f75&units=metric`
      );
      dispacth({
        type: ActionType.SEARCH_REPOSITORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispacth({
        type: ActionType.SEARCH_REPOSITORY_ERROR,
        payload: error.message,
      });
    }
  };
};
