import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PublicIcon from "@mui/icons-material/Public";
import { Box, Avatar, Dialog, useTheme, IconButton, Typography as Text } from "@mui/material";

import AppBarLayout from "../../layout/AppBarLayout";
import { StateContext } from "../../context/context";
import CountrySelection from "../CountrySelection";

const Dashboard = () => {
  const theme = useTheme();
  const { state } = useLocation();
  const { t } = useTranslation();
  const appState = useContext(StateContext);

  const [modalOpen, toggleModalOpen] = useState(false);

  const handleModalClose = () => toggleModalOpen(false);

  console.log(JSON.stringify(state));

  const { email, metadata } = state?.user || {};

  console.log(email);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarLayout
        headerRightContent={
          <IconButton onClick={() => toggleModalOpen(true)} sx={{ p: 0 }}>
            <Avatar variant="rounded" sx={{ bgcolor: theme.palette.primary.light, width: 100, height: 40 }}>
              <PublicIcon />
              <Text p={1} ml={0.5}>
                {`${appState?.lang}-${appState?.country}`}
              </Text>
            </Avatar>
          </IconButton>
        }
        content={
          <Box>
            <Dialog open={modalOpen} onClose={handleModalClose}>
              <CountrySelection onModalClose={handleModalClose} />
            </Dialog>
            <Text mb={2} variant="h4" color={theme.palette.primary.main}>
              {`${t("dashboard.welcome")} ${email?.replace("@test.com", "")}!`}
            </Text>
            <Text mb={2} variant="h6">{`${t("dashboard.signupTime")} ${metadata?.creationTime}`}</Text>
            <Text variant="h6">{`${t("dashboard.lastLoginTime")} ${metadata?.lastSignInTime}`}</Text>
          </Box>
        }
      />
    </Box>
  );
};

export default Dashboard;
