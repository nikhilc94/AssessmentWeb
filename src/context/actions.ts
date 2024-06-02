export const SELECT_COUNTRY = "SELECT_COUNTRY";
export const SELECT_LANGUAGE = "SELECT_LANGUAGE";

export const selectCountry = (country: string) => ({
  type: SELECT_COUNTRY,
  payload: country,
});

export const selectLanguage = (lang: string) => ({
  type: SELECT_LANGUAGE,
  payload: lang,
});
