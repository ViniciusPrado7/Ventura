import React, { useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Divider
} from '@mui/material';
import { IoCart, IoClose } from "react-icons/io5";
import { useCarrinhoContext } from '../../context/useCarrinhoContext';
import { useNavigate } from 'react-router-dom';

const CarrinhoSuspenso = () => {
  const { carrinho, adicionarProduto, removerProduto, removerProdutoCarrinho, valorTotal } = useCarrinhoContext();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (status) => () => setOpen(status);

  const finalizarCompra = () => {
    setOpen(false);
    navigate('/carrinho');
  };

  return (
    <>
      <IconButton color="inherit" onClick={toggleDrawer(true)}>
        <IoCart size={24} />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 350, p: 2, display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Carrinho</Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <IoClose size={24} />
            </IconButton>
          </Box>

          {carrinho.length === 0 ? (
            <Typography sx={{ mt: 2 }}>Seu carrinho está vazio</Typography>
          ) : (
            <>
              <List sx={{ flexGrow: 1 }}>
                {carrinho.map((item) => (
                  <ListItem key={item.id} alignItems="flex-start" sx={{ display: 'flex', alignItems: 'center', mb: 1, p: 1, borderRadius: 1, '&:hover': { backgroundColor: '#f5f5f5' } }}>
                    <ListItemAvatar>
                      <Avatar
                        src={item.Imagem}
                        alt={item.Nome}
                        variant="square"
                        sx={{ width: 70, height: 85, mr: 1 }}
                      />
                    </ListItemAvatar>

                    <ListItemText
                      primary={item.Nome}
                      secondary={
                        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 0.5 }}>
                          <Typography component="span" variant="body2" color="text.primary">
                            R$ {(item.preco * item.quantidade).toFixed(2)}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <Button size="small" variant="outlined" onClick={() => removerProduto(item.id)}>-</Button>
                            <Typography sx={{ mx: 1 }}>{item.quantidade}</Typography>
                            <Button size="small" variant="outlined" onClick={() => adicionarProduto(item)}>+</Button>
                            <Button size="small" color="error" variant="outlined" onClick={() => removerProdutoCarrinho(item.id)} sx={{ ml: 3 }}>
                              X
                            </Button>
                          </Box>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 1 }} />

              <Box sx={{ mt: 'auto', pt: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="subtitle1">Total:</Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    R$ {valorTotal.toFixed(2)}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={finalizarCompra}
                  sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' } }}
                >
                  Finalizar Compra
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default CarrinhoSuspenso;
