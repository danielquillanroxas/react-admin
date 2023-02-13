import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { palette } from "@mui/system";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px" display="flex" alignContent="center">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
    </Box>
}


export default FAQ;