import { cyan, deepOrange, orange, teal } from "@mui/material/colors";
import {
  CssVarsTheme,
  experimental_extendTheme as extendTheme,
  Theme,
} from "@mui/material/styles";

type CurrentTheme = Omit<Theme, "palette" | "applyStyles"> & CssVarsTheme;

export type CustomTheme = CurrentTheme & {
  boardTask: {
    headerHeight: number;
    boardHeight: number;
  };
};

const theme: CustomTheme = extendTheme({
  boardTask: {
    headerHeight: 48,
    boardHeight: 58,
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
} as never) as CustomTheme;

export default theme;
