import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Box, Radio, Button, RadioGroup, FormControl, FormControlLabel, Typography as Text } from "@mui/material";

import i18n from "../../locales/i18n";
import { isRTLLanguage } from "../../utils";
import { COUNTRY, LANGUAGE } from "../../constants";
import { DispatchContext, StateContext } from "../../context/context";
import { selectCountry, selectLanguage } from "../../context/actions";

interface CountrySelectionProps {
  onModalClose: () => void;
}

const CountrySelection = ({ onModalClose }: CountrySelectionProps) => {
  const { t } = useTranslation();
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const [country, setCountry] = useState(state?.country);
  const [lang, setLang] = useState(state?.lang);

  const countries = [
    { label: t(`country.${COUNTRY.AE}`), value: COUNTRY.AE },
    { label: t(`country.${COUNTRY.SA}`), value: COUNTRY.SA },
    { label: t(`country.${COUNTRY.IN}`), value: COUNTRY.IN },
    { label: t(`country.${COUNTRY.EG}`), value: COUNTRY.EG },
  ];

  const languages = [
    { label: t(`language.${LANGUAGE.EN}`), value: LANGUAGE.EN },
    { label: t(`language.${LANGUAGE.AR}`), value: LANGUAGE.AR },
    { label: t(`language.${LANGUAGE.HI}`), value: LANGUAGE.HI },
  ];

  const handleSave = () => {
    if (state?.country !== country) {
      dispatch(selectCountry(country));
    }
    if (state?.lang !== lang) {
      dispatch(selectLanguage(lang));
      i18n.changeLanguage(lang);
      document.body.setAttribute("dir", isRTLLanguage(lang) ? "rtl" : "ltr");
    }
    onModalClose();
  };

  return (
    <Box p={4}>
      <Text mb={1} variant="h5">
        {t("selectCountry")}
      </Text>
      <FormControl>
        <RadioGroup value={country} onChange={(e) => setCountry(e.target.value)}>
          {countries.map((country) => (
            <FormControlLabel value={country.value} control={<Radio />} label={country.label} />
          ))}
        </RadioGroup>
      </FormControl>
      <Text my={2} variant="h5">
        {t("selectLanguage")}
      </Text>
      <FormControl>
        <RadioGroup value={lang} onChange={(e) => setLang(e.target.value)}>
          {languages.map((lang) => (
            <FormControlLabel value={lang.value} control={<Radio />} label={lang.label} />
          ))}
        </RadioGroup>
      </FormControl>
      <Box mt={2} display="flex" justifyContent="flex-end">
        <Button variant="outlined" onClick={onModalClose}>
          {t("back")}
        </Button>
        <Box mx={0.5}></Box>
        <Button variant="contained" onClick={handleSave}>
          {t("save")}
        </Button>
      </Box>
    </Box>
  );
};

export default CountrySelection;
