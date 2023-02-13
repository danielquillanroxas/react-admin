import { Box, Typography, useTheme } from "@mui/material";
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

    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>

        <Accordion> 
            <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important Question 
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Aute adipisicing labore nulla sint fugiat pariatur aliquip excepteur Lorem voluptate velit. Est culpa mollit esse labore. Ullamco in labore anim consectetur irure nulla. Excepteur in duis aliqua aute anim magna anim pariatur dolor minim.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion> 
            <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important Question 
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Aute adipisicing labore nulla sint fugiat pariatur aliquip excepteur Lorem voluptate velit. Est culpa mollit esse labore. Ullamco in labore anim consectetur irure nulla. Excepteur in duis aliqua aute anim magna anim pariatur dolor minim.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion> 
            <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important Question 
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Aute adipisicing labore nulla sint fugiat pariatur aliquip excepteur Lorem voluptate velit. Est culpa mollit esse labore. Ullamco in labore anim consectetur irure nulla. Excepteur in duis aliqua aute anim magna anim pariatur dolor minim.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion> 
            <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important Question 
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Aute adipisicing labore nulla sint fugiat pariatur aliquip excepteur Lorem voluptate velit. Est culpa mollit esse labore. Ullamco in labore anim consectetur irure nulla. Excepteur in duis aliqua aute anim magna anim pariatur dolor minim.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion> 
            <AccordionSummary expandIcon = {<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An Important Question 
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Aute adipisicing labore nulla sint fugiat pariatur aliquip excepteur Lorem voluptate velit. Est culpa mollit esse labore. Ullamco in labore anim consectetur irure nulla. Excepteur in duis aliqua aute anim magna anim pariatur dolor minim.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
}


export default FAQ;