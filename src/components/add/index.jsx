import { Box, Typography } from "@mui/material";
import Appbar from '../appbar/index';
import { DrawerHeader } from "./style";
import Breadcrumbs from '../breadcrumbs/index';
import { useLocation } from "react-router-dom";
function Index() {
    const location = useLocation();
    return(
        <Box sx={{display: 'flex'}}>
            <Appbar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Breadcrumbs />
                <Typography paragraph>
                    This is add
                </Typography>
            </Box>
        </Box>
    )
}

export default Index;