import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import CardGenerico from '../components/CardGenerico'

const Produtos = () => {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      Nome: "Camisa Polo",
      Preço: "R$ 79,90",
      Imagem: "https://via.placeholder.com/200x150.png?text=Camisa+Polo"
    },
    {
      id: 2,
      Nome: "Calça Jeans",
      Preço: "R$ 149,90",
      Imagem: "https://via.placeholder.com/200x150.png?text=Calça+Jeans"
    },
    {
      id: 3,
      Nome: "Tênis Esportivo",
      Preço: "R$ 199,90",
      Imagem: "https://via.placeholder.com/200x150.png?text=Tênis+Esportivo"
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
