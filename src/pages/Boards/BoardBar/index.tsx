import Box from "@mui/material/Box";
import { CustomTheme } from "~/theme";

export const BoardBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: "100%",
        height: (theme) => (theme as CustomTheme).boardTask.boardHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      Board Bar
    </Box>
  );
};
