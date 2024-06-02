import { useTranslation } from "react-i18next";
import { Box, TextField, Typography as Text, AppBar, IconButton, Toolbar, useTheme } from "@mui/material";

const Login = () => {
  const theme = useTheme();
  const {t} = useTranslation();

  return (
    <Box>
      <Text variant="h3" color={theme.palette.primary.main}>{t("welcome")}</Text>
      <TextField label="Username" />
    </Box>
  );
};

export default Login;
