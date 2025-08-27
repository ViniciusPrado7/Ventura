import { Box, Drawer, IconButton, Typography, useTheme, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import { IoCart, IoClose } from "react-icons/io5";
import { useCarrinhoContext } from '../../../context/useCarrinhoContext';

const Carrinho = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const { carrinho, removerProduto, valorTotal } = useCarrinhoContext();

  const toggleDrawer = (status) => () => {
    setOpen(status);
  };

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

          {carrinho.length === 0 ? (
            <Typography>Seu carrinho está vazio</Typography>
          ) : (
            <>
              <List>
                {carrinho.map((produto) => (
                  <ListItem key={produto.id}
                    secondaryAction={
                      <IconButton edge="end" color="error" onClick={() => removerProduto(produto.id)}>
                        <IoClose />
                      </IconButton>
                    }
                  >
                    <ListItemText
                      primary={`${produto.Nome} (x${produto.quantidade})`}
                      secondary={`R$ ${(produto.preco * produto.quantidade).toFixed(2)}`}
                    />
                  </ListItem>
                ))}
              </List>

              <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
                <Typography variant="subtitle1">Total:</Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  R$ {valorTotal.toFixed(2)}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Drawer>
    </>
  )
}

export default Carrinho;
