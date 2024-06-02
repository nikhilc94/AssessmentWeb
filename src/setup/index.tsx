import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "../App";
import { getSelectedTheme } from "../theme";
import { COUNTRY } from "../constants";

const Setup = () => {
  return (
    <ThemeProvider theme={getSelectedTheme(COUNTRY.AE)}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default Setup;
