import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import PublicIcon from "@mui/icons-material/Public";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Box, Grid, Avatar, Button, Dialog, useTheme, IconButton, TextField, Typography as Text } from "@mui/material";

import { auth } from "../../firebase";
import { Regex } from "../../utils/Regex";
import CountrySelection from "../CountrySelection";
import AppBarLayout from "../../layout/AppBarLayout";
import { StateContext } from "../../context/context";

const Login = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const state = useContext(StateContext);

  const [modalOpen, toggleModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value.trim();
    const regex = new RegExp(Regex.USERNAME_AE);
    if (!regex.test(text)) {
      setUsernameError(t("errors.username"));
    } else {
      setUsernameError("");
    }
    setUsername(text);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value.trim();
    const regex = new RegExp(Regex.PASSWORD);
    if (!regex.test(text)) {
      setPasswordError(t("errors.password"));
    } else {
      setPasswordError("");
    }
    setPassword(text);
  };

  const handleModalClose = () => toggleModalOpen(false);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, `${username}@test.com`, password);
      const user = userCredential.user;
      console.log("user", user);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const disableButton = !!(!username || !password || usernameError || passwordError);

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
          <Box mt={4} minWidth={"80%"}>
            <Dialog open={modalOpen} onClose={handleModalClose}>
              <CountrySelection onModalClose={handleModalClose} />
            </Dialog>
            <Text variant="h4" color={theme.palette.primary.main}>
              {t("welcome")}
            </Text>
            <Grid container my={2} spacing={4}>
              <Grid item xs={12} md={7}>
                <TextField
                  autoFocus
                  fullWidth
                  value={username}
                  label={t("username")}
                  error={!!usernameError}
                  helperText={usernameError}
                  onChange={handleUsernameChange}
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <TextField
                  fullWidth
                  value={password}
                  label={t("password")}
                  error={!!passwordError}
                  helperText={passwordError}
                  onChange={handlePasswordChange}
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <Button fullWidth variant="contained" onClick={handleLogin} disabled={disableButton}>
                  {t("login")}
                </Button>
              </Grid>
            </Grid>
          </Box>
        }
      />
    </Box>
  );
};

export default Login;
