import { useState } from "react";
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

import { COUNTRY } from "../../constants";
import AppBarLayout from "../../layout/AppBarLayout";

const Login = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [modalOpen, toggleModalOpen] = useState(true);
  const [country, setCountry] = useState('AE')

  const countries = [
    { label: t(`country.${COUNTRY.AE}`), value: COUNTRY.AE },
    { label: t(`country.${COUNTRY.SA}`), value: COUNTRY.SA },
    { label: t(`country.${COUNTRY.IN}`), value: COUNTRY.IN },
    { label: t(`country.${COUNTRY.EG}`), value: COUNTRY.EG },
  ];

  const handleModalClose = () => toggleModalOpen(false)

  const handleSave = () => {
    handleModalClose();
  }

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
          <Box display="flex" justifyContent="flex-end">
            <Button variant="outlined" onClick={handleModalClose}>{t("back")}</Button>
            <Box mx={0.5}></Box>
            <Button variant="contained" onClick={handleSave}>{t("save")}</Button>
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
                en-AE
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
