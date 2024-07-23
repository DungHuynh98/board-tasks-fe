import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import { CustomTheme } from "~/theme";

export const BoardContent = () => {
  const getBoardContentHeight = (theme: Theme) => {
    const { headerHeight, boardHeight } = (theme as CustomTheme).boardTask;
    return `calc(100vh - ${headerHeight}px - ${boardHeight}px)`;
  };

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: getBoardContentHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      Board Content
    </Box>
  );
};
