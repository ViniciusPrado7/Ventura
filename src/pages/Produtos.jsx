import { Box, Button, Grid, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import CardGenerico from '../components/CardGenerico'
import { useCarrinhoContext } from '../context/useCarrinhoContext';

const Produtos = () => {
  const theme = useTheme();

  const { adicionarProduto } = useCarrinhoContext();

  const [produtos, setProdutos] = useState([
    {
      id: 1,
      Nome: "Camisa Polo",
      preco: 79.90,
      Imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
    },
    {
      id: 2,
      Nome: "Calça Jeans",
      preco: 149.90,
      Imagem: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400"
    },
    {
      id: 3,
      Nome: "Tênis Esportivo",
      preco: 199.90,
      Imagem: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400"
    }
  ])


  const removerProduto = (id) => {
    setProdutos((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <Box
    sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "75vh",
        p: 3,
        flexDirection: 'column'
      }}>
       <Typography variant='h5' sx={{mb: 8, color: theme.palette.azul.hover, bold: 800}}> Produtos que estão bombando</Typography>
      <Box>
      <Grid sx={{}} container spacing={2} justifyContent="center">
        {produtos.map((produto) => (
          <Grid sx={{width: 500}} item key={produto.id}>
            <CardGenerico
              titulo={produto.Nome}
              dados={produto}
            >
              <Button
                variant="contained"
                sx={{ background: theme.palette.azul.main, '&:hover': { backgroundColor: theme.palette.azul.hover } }}
                onClick={() => adicionarProduto(produto)}
              >
                Adicionar ao carrinho
              </Button>
            </CardGenerico>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
    
  )
}

export default Produtos
