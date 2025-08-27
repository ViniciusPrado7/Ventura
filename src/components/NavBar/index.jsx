import React from 'react';
import { AppBar, Container, ListItemButton, Toolbar, Typography, useTheme } from '@mui/material';
import Menu from './Menu';
import CarrinhoSuspenso from '../CarrinhoSuspenso';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const theme = useTheme();

    return (
        <AppBar position="static" sx={{ background: theme.palette.azul.main }}>
            <Container maxWidth="x1">
                <Toolbar>
                    <Typography
                        variant='h6'
                        noWrap
                        sx={{ mr: 2, fontWeight: 700, letterSpacing: ".1rem", color: "inherit", textDecoration: "none" }}
                    >
                        <ListItemButton component={Link} to={"/"}>
                            MinhaLogo
                        </ListItemButton>
                    </Typography>
                    <Menu />
                    <CarrinhoSuspenso />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
