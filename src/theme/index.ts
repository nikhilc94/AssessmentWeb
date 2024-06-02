import { COUNTRY } from "../constants";
import * as Countries from "../theme/countries";

export const getSelectedTheme = (countryCode: COUNTRY) => {
  const countryData = (Countries as Record<string, string>)[countryCode.trim().toUpperCase()] || "";
  return countryData;
};
