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
    headerHeight: 58,
    boardHeight: 60,
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: 8,
            height: 8,
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#bdc3c7",
            borderRadius: 8,
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#00b894",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }: { theme: CustomTheme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.875rem",
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: { theme: CustomTheme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.875rem",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
          "&:hover": {
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
            },
          },
          "& fieldset": {
            borderWidth: "1px !important",
          },
        }),
      },
    },
  },
} as never) as CustomTheme;

export default theme;
