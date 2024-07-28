import Box from "@mui/material/Box";
import { CustomTheme } from "~/theme";
import { Card } from "./Card/Card";

export const ListCards = () => {
  return (
    <Box
      sx={{
        p: "0 5px",
        m: "0 5px",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        overflowX: "hidden",
        overflowY: "auto",
        maxHeight: (theme) =>
          `calc(${
            (theme as CustomTheme).boardTask.contentHeight
          } - ${theme.spacing(5)} - ${
            (theme as CustomTheme).boardTask.columnHeaderHeight +
            (theme as CustomTheme).boardTask.columnFooterHeight
          }px)`,
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ced0da",
          borderRadius: 8,
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#bfc2cf",
        },
      }}
    >
      <Card />
      <Card temporaryHideMedia />
    </Box>
  );
};
