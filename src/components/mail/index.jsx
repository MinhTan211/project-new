import { Box, Typography } from "@mui/material";
import { DrawerHeader } from "./style";
import Appbar from '../appbar/index';
import Breadcrumbs from '../breadcrumbs/index';

function Index() {
    return (
        <Box sx={{display: 'flex'}}>
        <Appbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Breadcrumbs />
            <Typography paragraph>
                This is mail
            </Typography>
        </Box>
    </Box>
    )
}

export default Index;