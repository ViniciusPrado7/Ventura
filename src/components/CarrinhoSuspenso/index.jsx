import React, { useState } from 'react';
import { Box, Drawer, IconButton, Typography, List } from '@mui/material';
import { IoCart, IoClose } from "react-icons/io5";
import { useCarrinhoContext } from '../context/useCarrinhoContext';
import ItemCarrinho from './ItemCarrinho';

const CarrinhoSuspenso = () => {
  const { carrinho, removerProdutoCarrinho } = useCarrinhoContext();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (status) => () => setOpen(status);

  return (
    <>
      <IconButton color='inherit' onClick={toggleDrawer(true)}>
        <IoCart size={24} />
      </IconButton>

      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 300, p: 2, display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant='h6'>Carrinho</Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <IoClose size={24} />
            </IconButton>
          </Box>

          {carrinho.length === 0 ? (
            <Typography>Seu carrinho está vazio</Typography>
          ) : (
            <List>
              {carrinho.map((item) => (
                <ItemCarrinho
                  key={item.id}
                  itemCarrinho={item}
                  modo="compacto"
                  onRemover={() => removerProdutoCarrinho(item.id)}
                />
              ))}
            </List>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default CarrinhoSuspenso;
