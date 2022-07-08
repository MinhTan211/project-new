import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import  AppBar  from "../appbar/index";
import {DrawerHeader} from './style';
import Breadcrumbs from '../breadcrumbs/index';
function Index() {
    return (
        <Box sx={{display: 'flex'}}>
            <AppBar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Breadcrumbs />
            <Typography paragraph>
                This is send mail
            </Typography>
        </Box>
        </Box>
    )
}

export default Index;