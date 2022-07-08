//react
import { useState } from 'react';
//material UI
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
//style
import { AppBar, Drawer, DrawerHeader, LinkItem, Search, SearchIconWrapper, StyledInputBase } from './style';


const arialable = {
    menuId: 'primary-search-account-menu',
    notificationsIcon: 'show 17 new notifications',
    email: 'show 4 new mails',
    openDrawer: 'open drawer',
    account: 'account of current user'
}

function Index() {
    const [open, setOpen] = useState(true);

    const handleDrawer = () => {
        setOpen(!open);
    };

    const handleChainParams = (text) => {
        return '/admin/' + text.toLowerCase().split(' ').join('');
    }

    return <>
        <AppBar position="fixed">
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ ...(!open && { display: 'none' }), }}
                >
                    MUI MUI
                </Typography>
                <IconButton
                    size="large"    
                    color="inherit"
                    aria-label={arialable.openDrawer}
                    sx={{ ml: 13, ...(!open && { ml: 0 }) }}
                    onClick={handleDrawer}
                >
                    <MenuIcon />
                </IconButton>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton size="large" aria-label={arialable.email} color="inherit">
                        <Badge badgeContent={3} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label={arialable.notificationsIcon}
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label={arialable.account}
                        aria-controls={arialable.menuId}
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
            <DrawerHeader />
            <List>
                {['Inbox', 'Email', 'Send Mail'].map((text, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <LinkItem to={handleChainParams(text)}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} />
                            </ListItemButton>
                        </LinkItem>

                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>

    </>
}

export default Index;