import { Box, Grid, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useCarrinhoContext } from '../context/useCarrinhoContext';
import CardProduto from '../components/Cards/CardProduto';

const Produtos = () => {
  const theme = useTheme();
  const { adicionarProduto } = useCarrinhoContext();

  const [produtos] = useState([
    {
      id: 1,
      Nome: "Camisa Polo",
      descricao: "Confortável e estilosa, perfeita para o dia a dia.",
      preco: 79.90,
      Imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
    },
    {
      id: 2,
      Nome: "Calça Jeans",
      descricao: "Jeans resistente e moderno.",
      preco: 149.90,
      Imagem: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400"
    },
    {
      id: 3,
      Nome: "Tênis Esportivo",
      descricao: "Ideal para corridas e caminhadas.",
      preco: 199.90,
      Imagem: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400"
    }
  ])

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "75vh",
        p: 3,
        flexDirection: 'column'
      }}
    >
      <Typography
        variant='h5'
        sx={{ mb: 8, color: theme.palette.azul.hover }}
      >
        Produtos que estão bombando
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {produtos.map((produto) => (
          <Grid sx={{ width: 500 }} item key={produto.id}>
            <CardProduto
              produto={produto}
              onAddCarrinho={adicionarProduto}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Produtos
