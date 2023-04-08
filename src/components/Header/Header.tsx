import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Button from '@mui/material/Button';

interface HeaderProps { };

export const Header = (props: HeaderProps) => {
    //const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar sx={{ backgroundColor: "white" }} >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                padding={"0 25px"}
                width="100%"
            >
                <Typography color="primary" sx={{ flex: "0 0 15%" }}>
                    LOGO
                </Typography>
                <Toolbar sx={{ flex: "1 1 70%" }}>
                    <List sx={{ display: "flex" }}>
                        <ListItem sx={{ flex: "1 1 auto" }}>
                            <ListItemButton component="a" href="#">
                                Features
                            </ListItemButton>
                        </ListItem>
                        <ListItem sx={{ flex: "1 0 auto" }}>
                            <ListItemButton component="a" href="#">
                                How it works
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Toolbar>
                <Button sx={{ flex: "0 0 15%" }}>
                    Log In
                </Button>
            </Box>
        </AppBar >
    );
};