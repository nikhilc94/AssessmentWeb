import { createTheme } from "@mui/material";

type ColorsType = {
  MAIN?: string;
  ERROR?: string;
};

export const getTheme = (colors: ColorsType) => {
  return (createTheme as any)({
    palette: {
      primary: { main: colors?.MAIN },
      error: { main: colors?.ERROR },
    },
  });
};
