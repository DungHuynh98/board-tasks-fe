// import { cyan, deepOrange, orange, teal } from "@mui/material/colors";
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
    contentHeight: string;
    columnHeaderHeight: number;
    columnFooterHeight: number;
  };
};

const HEADER_HEIGHT = 58;
const BOARD_HEIGHT = 60;
const COLUMN_HEADER_HEIGHT = 50;
const COLUMN_FOOTER_HEIGHT = 56;

const theme: CustomTheme = extendTheme({
  boardTask: {
    headerHeight: HEADER_HEIGHT,
    boardHeight: BOARD_HEIGHT,
    contentHeight: `calc(100vh - ${HEADER_HEIGHT}px - ${BOARD_HEIGHT}px)`,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT,
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange,
    //   },
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange,
    //   },
    // },
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
            backgroundColor: "#dcdde1",
            borderRadius: 8,
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "white",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderWidth: "1px",
          "&:hover": {
            borderWidth: "1px",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-body1": {
            fontSize: "0.875rem",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          "& fieldset": {
            borderWidth: "1px !important",
          },
          "&:hover fieldset": {
            borderWidth: "2px !important",
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px !important",
          },
        },
      },
    },
  },
} as never) as CustomTheme;

export default theme;
