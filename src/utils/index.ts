import { LANGUAGE } from "../constants";

const rtlLanguages = [LANGUAGE.AR];

export const isRTLLanguage = (language: LANGUAGE) => rtlLanguages.includes(language);
