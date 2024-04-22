import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, List, ListItem, ListItemButton, Drawer, IconButton, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

function Navbar() {
    const navbarStyle = {
        backgroundColor: '#000',
        height: '80px',
    };

    const brandStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'inherit',
    };

    const desktopButtonStyle = {
        marginRight: '20px',
    };

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <AppBar position="static" style={navbarStyle}>
                <Toolbar sx={{ height: '100%' }}>
                    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                        <Typography variant="h6" component={Link} to="/" style={brandStyle}>
                            CarSharing
                        </Typography>
                        {!isMobile && (
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Button color="inherit" style={desktopButtonStyle} onClick={openModal}>Login</Button>
                                <Button color="inherit" style={{ marginRight: '10px' }} component={Link} to="/register">Register</Button>
                                <Button color="inherit" variant="outlined">Make an ad</Button>
                            </Box>
                        )}
                        {isMobile && (
                            <IconButton color="inherit" onClick={handleDrawerOpen}>
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Container>
                    <Drawer
                        anchor="right"
                        open={isDrawerOpen}
                        onClose={handleDrawerClose}
                        variant={isMobile ? "temporary" : "persistent"}
                        sx={{
                            '& .MuiDrawer-paper': {
                                backgroundColor: '#333',
                                width: '70%',
                                height: isMobile ? '100%' : 'auto',
                            },
                        }}
                    >
                        <IconButton
                            color="inherit"
                            aria-label="close"
                            onClick={handleDrawerClose}
                            sx={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                            }}
                        >
                            <CloseIcon sx={{ color: 'white' }} />
                        </IconButton>
                        <Box sx={{ marginTop: '40px' }}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={handleDrawerClose}>
                                        <Button color="inherit" style={{ color: 'white' }} onClick={openModal}>Login</Button>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={handleDrawerClose}>
                                        <Button color="inherit" component={Link} to="/register" style={{ color: 'white' }}>Register</Button>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={handleDrawerClose}>
                                        <Button color="inherit" variant="outlined" style={{ color: 'white', width: '100%' }}>Make an ad</Button>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Drawer>
                </Toolbar>
            </AppBar>
            <LoginModal open={isModalOpen} onClose={closeModal} />
        </>
    );
}

export default Navbar;