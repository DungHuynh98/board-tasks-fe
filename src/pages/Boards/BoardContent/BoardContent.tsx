import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import { CustomTheme } from "~/theme";
import { ListColumns } from "./ListColumns/ListColumns";

export const BoardContent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme: Theme) =>
          (theme as CustomTheme).boardTask.contentHeight,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        p: "10px 0",
      }}
    >
      <ListColumns />
    </Box>
  );
};
