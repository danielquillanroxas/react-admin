import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import InputBase from "@mui/material";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/LightModeOutlined";
import NotificationOutlined from "@mui/icons-material/LightModeOutlined";
import SettingsOutlined from "@mui/icons-material/LightModeOutlined";
import PersonOutlined from "@mui/icons-material/LightModeOutlined";
import SearchIcon from "@mui/icons-material/LightModeOutlined";


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (<Box display="flex" justifyContent="space-between" p={2}>

        <IconButton sx={ display:flex }></IconButton>
    </Box>); 
};

export default Topbar;