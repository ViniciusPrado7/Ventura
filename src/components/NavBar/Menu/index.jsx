import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const links = [
    { name: "Usuários", path: "/usuarios" },
    { name: "Tarefas", path: "/tarefas" },
    { name: "Produtos", path: "/produtos" },
    { name: "Carrinho", path: "/carrinho" },
    { name: "DashBoard", path: "/dashboard" },

];

const Menu = () => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <List sx={{ display: "flex" }}>
                {links.map((link) => (
                    <ListItem key={link.path} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={link.path}
                            sx={{ textAlign: "center" }}
                        >
                            <ListItemText primary={link.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>

    )
}

export default Menu