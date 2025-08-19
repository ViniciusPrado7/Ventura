import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import Menu from './Menu'
import Carrinho from './Carrinho'

const NavBar = () => {
    return (
        <AppBar position="static" color='default'>
            <Container maxWidth="x1">
                <Toolbar>
                    <Typography
                        variant='h6'
                        noWrap
                        sx={{ mr: 2, fontWeight: 700, letterSpacing: ".1rem", color: "inherit", textDecoration: "none" }}
                    >
                        MinhaLogo
                    </Typography>
                    <Menu />
                    <Carrinho />
                </Toolbar>
            </Container>
        </AppBar>


    )
}

export default NavBar