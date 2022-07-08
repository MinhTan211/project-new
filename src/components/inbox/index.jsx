import { Box, Button, Typography } from "@mui/material";
import Appbar from '../appbar/index';
import { DrawerHeader, LinkItem } from "./style";
import Breadcrumbs from '../breadcrumbs/index';
function Index() {
    return(
        <Box sx={{display: 'flex'}}>
            <Appbar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Breadcrumbs />
                <Typography paragraph>
                    <LinkItem to='/admin/inbox/add'>add</LinkItem>
                </Typography>
            </Box>
        </Box>
    )
}

export default Index;