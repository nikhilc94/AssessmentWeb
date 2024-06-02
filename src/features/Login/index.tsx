import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PublicIcon from "@mui/icons-material/Public";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  Box,
  Grid,
  Avatar,
  Button,
  Dialog,
  useTheme,
  Snackbar,
  IconButton,
  TextField,
  Typography as Text,
} from "@mui/material";

import { auth } from "../../firebase";
import { Regex } from "../../utils/Regex";
import CountrySelection from "../CountrySelection";
import AppBarLayout from "../../layout/AppBarLayout";
import { StateContext } from "../../context/context";
import { ROUTE_DASHBOARD } from "../../router/routes";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const state = useContext(StateContext);

  const { lang, country } = state;

  const [modalOpen, toggleModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [snackBarOpen, toggleSnackBarOpen] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value.trim();
    const regex = new RegExp(Regex.USERNAME[country]);
    if (!regex.test(text)) {
      setUsernameError(t(`errors.username.${country}`));
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

  const handleModalClose = () => {
    setUsername("");
    setPassword("");
    setUsernameError("");
    setPasswordError("");
    toggleModalOpen(false);
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, `${username}@test.com`, password);
      const user = userCredential.user;
      navigate(ROUTE_DASHBOARD, {
        replace: true,
        state: { user: { email: user.email, metadata: user.metadata } },
      });
      console.log("user", user);
    } catch (error: any) {
      toggleSnackBarOpen(true);
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
                {`${lang}-${country}`}
              </Text>
            </Avatar>
          </IconButton>
        }
        content={
          <Box mt={4} minWidth={"80%"}>
            <Dialog open={modalOpen} onClose={() => toggleModalOpen(false)}>
              <CountrySelection onModalClose={handleModalClose} />
            </Dialog>
            <Snackbar
              open={snackBarOpen}
              autoHideDuration={4000}
              message={t("errors.incorrectCredentials")}
              onClose={() => toggleSnackBarOpen(false)}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            />
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
                  inputProps={{ "data-testid": "username-input" }}
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
                  inputProps={{ "data-testid": "password-input" }}
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleLogin}
                  disabled={disableButton}
                  data-testid="login-button"
                >
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
