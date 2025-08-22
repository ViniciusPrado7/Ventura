import { Box, Drawer, IconButton, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { IoCart, IoClose } from "react-icons/io5";

const Carrinho = () => {

    const theme = useTheme();
    const [open, setOpen] = useState(false)

    const toggleDrawer = (status) => () => {
        setOpen(status)
    }

    return (
        <>
            <IconButton color='inherit' onClick={toggleDrawer(true)}>
                <IoCart size={24} />
            </IconButton>
            <Drawer
                anchor='right'
                open={open}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: 300,
                        height: "100vh",
                        p: 2,
                        display: "flex",
                        flexDirection: "column"
                    }}
                    role="presentation"
                >
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2
                    }}>
                        <Typography variant='h6' sx={{ color: theme.palette.azul.main }}>
                            Carrinho
                        </Typography>
                        <IconButton onClick={toggleDrawer(false)}>
                            <IoClose size={24} />
                        </IconButton>
                    </Box>
                    <Typography>
                        Lista de produtos do carrinho
                    </Typography>
                </Box>
            </Drawer>
        </>

    )
}

export default Carrinho