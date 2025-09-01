import { Card, CardContent, Typography, Box, CardMedia, Button, useTheme } from '@mui/material';

const CardProduto = ({ produto, onAddCarrinho, children }) => {
  const theme = useTheme();

  return (
    <Card sx={{
      minWidth: 350,
      borderRadius: 2,
      boxShadow: 3,
      m: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      {produto.Imagem && (
        <CardMedia
          component="img"
          height="180"
          image={produto.Imagem}
          alt={produto.Nome}
        />
      )}

      <CardContent sx={{ display: "flex", flexDirection: 'column', gap: 1 }}>
        <Typography variant="h6" color={theme.palette.azul.main}>
          {produto.Nome}
        </Typography>

        <Typography >
          {produto.descricao}
        </Typography>

        <Typography sx={{ fontWeight: 'bold', mt: 1 }}>
          R$ {produto.preco.toFixed(2)}
        </Typography>

        <Box sx={{ mt: 2 }}>
          {children ? (
            children
          ) : (
            <Button
              variant="contained"
              sx={{
                background: theme.palette.azul.main,
                '&:hover': { backgroundColor: theme.palette.azul.hover }
              }}
              onClick={() => onAddCarrinho(produto)}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardProduto;
