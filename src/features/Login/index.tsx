import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import PublicIcon from "@mui/icons-material/Public";
import {
  Box,
  Radio,
  Avatar,
  Button,
  Dialog,
  useTheme,
  FormControl,
  IconButton,
  TextField,
  RadioGroup,
  FormControlLabel,
  Typography as Text,
} from "@mui/material";

import { COUNTRY, LANGUAGE } from "../../constants";
import AppBarLayout from "../../layout/AppBarLayout";
import { selectCountry, selectLanguage } from "../../context/actions";
import { DispatchContext, StateContext } from "../../context/context";

const Login = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  
  const [modalOpen, toggleModalOpen] = useState(false);
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

  const handleModalClose = () => toggleModalOpen(false);

  const handleSave = () => {
    dispatch(selectCountry(country));
    dispatch(selectLanguage(lang));
    handleModalClose();
  };

  const renderChangeCountryModal = () => {
    return (
      <Dialog open={modalOpen} onClose={handleModalClose}>
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
            <Button variant="outlined" onClick={handleModalClose}>
              {t("back")}
            </Button>
            <Box mx={0.5}></Box>
            <Button variant="contained" onClick={handleSave}>
              {t("save")}
            </Button>
          </Box>
        </Box>
      </Dialog>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarLayout
        headerRightContent={
          <IconButton onClick={() => toggleModalOpen(true)} sx={{ p: 0 }}>
            <Avatar variant="rounded" sx={{ bgcolor: theme.palette.primary.light, width: 100, height: 40 }}>
              <PublicIcon />
              <Text p={1} ml={0.5}>
                {`${state?.lang}-${state?.country}`}
              </Text>
            </Avatar>
          </IconButton>
        }
        content={
          <Box>
            {renderChangeCountryModal()}
            <Text variant="h3" color={theme.palette.primary.main}>
              {t("welcome")}
            </Text>
            <TextField label={t("username")} />
          </Box>
        }
      />
    </Box>
  );
};

export default Login;
