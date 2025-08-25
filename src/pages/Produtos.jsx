import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import CardGenerico from '../components/CardGenerico'

const Produtos = () => {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      Nome: "Camisa Polo",
      Preço: "R$ 79,90",
      Imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
    },
    {
      id: 2,
      Nome: "Calça Jeans",
      Preço: "R$ 149,90",
      Imagem: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400"
    },
    {
      id: 3,
      Nome: "Tênis Esportivo",
      Preço: "R$ 199,90",
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
        p: 3
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {produtos.map((produto) => (
          <Grid item key={produto.id}>
            <CardGenerico
              titulo={produto.Nome}
              dados={{
                Preço: produto.Preço,
                Imagem: produto.Imagem
              }}
              onExcluir={() => removerProduto(produto.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Produtos
