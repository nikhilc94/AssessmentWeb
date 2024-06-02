import * as Actions from "./actions";
import { COUNTRY, LANGUAGE } from "../constants";

export const initialState: any = {
  country: COUNTRY.AE,
  lang: LANGUAGE.EN,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case Actions.SELECT_COUNTRY:
      return { ...state, country: action.payload };
    case Actions.SELECT_LANGUAGE:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
}
