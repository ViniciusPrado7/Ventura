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
import { IoCart, IoClose, IoTrashBin } from "react-icons/io5";
import { useCarrinhoContext } from '../../context/useCarrinhoContext';
import { useNavigate } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import theme from '../../Theme';

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
        <Box sx={{ width: 360, display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2,  background: theme.palette.azul.main, p: 2 }}>
            <Typography variant="h6" sx={{color: "white"}}>Carrinho</Typography>
            <IconButton sx={{color: "white"}} onClick={toggleDrawer(false)}>
              <IoClose size={24} />
            </IconButton>
          </Box>

          {carrinho.length === 0 ? (
            <Typography variant='subtitle' sx={{ alignSelf: "center", mt: 2 }}>Seu carrinho está vazio</Typography>
          ) : (
            <>
              <List sx={{ flexGrow: 1 }}>
                {carrinho.map((item) => (
                  <ListItem key={item.id} alignItems="flex-start" sx={{ display: 'flex', alignItems: 'center', mb: 1, p: 2,  '&:hover': { backgroundColor: '#f5f5f5' }, borderBottom: "1px solid black" }}>
                    <ListItemAvatar>
                      <Avatar
                        src={item.Imagem}
                        alt={item.Nome}
                        variant="square"
                        sx={{ width: 130, height: 150, mr: 1 }}
                      />
                    </ListItemAvatar>

                    <ListItemText 
                    sx={{mb: 1}}
                      primary={item.Nome}
                      secondary={
                        <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1, gap: 1 }}>
                          <Typography component="span" variant="subtitle1" color="text.primary">
                            Quantidade:
                          </Typography>

                          <Box sx={{ display: 'flex', alignItems: 'center', mt: .8}}>
                            <Button sx={{ borderRadius: 10, padding: .2, minWidth: .2 }} variant="outlined" onClick={() => removerProduto(item.id)}>-</Button>
                            <Typography sx={{ mx: 1 }}>{item.quantidade}</Typography>
                            <Button sx={{ borderRadius: 10, padding: .2, minWidth: .2 }} variant="outlined" onClick={() => adicionarProduto(item)}>+</Button>
                            <Button color="error" onClick={() => removerProdutoCarrinho(item.id)} sx={{ ml: 3 }}>
                              <IoTrashBin size='17' />
                            </Button>
                          </Box>
                          <Typography sx={{ mt: 1, fontSize: "1.1rem" }} component="span" variant="subtitle1" color="text.primary">
                            R$ {(item.preco * item.quantidade).toFixed(2)}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 1 }} />

              <Box sx={{ mt: 'auto', p: 2 }}>
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
                  sx={{ backgroundColor: theme.palette.azul.main, '&:hover': { backgroundColor: theme.palette.azul.hover } }}
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
