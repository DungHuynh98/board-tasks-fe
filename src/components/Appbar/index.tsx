import Box from "@mui/material/Box";
import { ModeSelect } from "~/components/ModeSelect";
import { CustomTheme } from "~/theme";

export const AppBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
        height: (theme) => (theme as CustomTheme).boardTask.headerHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      <ModeSelect />
    </Box>
  );
};
