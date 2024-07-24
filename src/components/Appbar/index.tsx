import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import LogoIcon from "~/assets/logo.svg?react";
import { ModeSelect } from "~/components/ModeSelect";
import { CustomTheme } from "~/theme";
import { Profiles } from "./Menus/Profiles";
import { Recent } from "./Menus/Recent";
import { Starred } from "./Menus/Starred";
import { Templates } from "./Menus/Templates";
import { Workspaces } from "./Menus/Workspaces";

export const AppBar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => (theme as CustomTheme).boardTask.headerHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={LogoIcon}
            fontSize="small"
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "lfex" }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="search"
          size="small"
          sx={{
            minWidth: 120,
          }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: "primary.main" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
};
