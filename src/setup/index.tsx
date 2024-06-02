import { useReducer } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "../App";
import { COUNTRY } from "../constants";
import { getSelectedTheme } from "../theme";
import appReducer, { initialState } from "../context/reducer";
import { DispatchContext, StateContext } from "../context/context";

const Setup = () => {
  const [appContextState, appContextDispatch] = useReducer(appReducer, initialState);

  return (
    <DispatchContext.Provider value={appContextDispatch}>
      <StateContext.Provider value={appContextState}>
        <ThemeProvider theme={getSelectedTheme(COUNTRY.AE)}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default Setup;
