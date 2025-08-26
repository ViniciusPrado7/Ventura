import { Card, CardContent, Typography, Box, useTheme, CardMedia } from '@mui/material'

const CardGenerico = ({ titulo, dados, children }) => {
  const theme = useTheme();

  return (
    <Card sx={{
      minWidth: 400,
      width: "auto",
      border: `2px solid ${theme.palette.azul.main}`,
      m: 1
    }}>
      {dados.Imagem && (
        <CardMedia
          component="img"
          height="180"
          image={dados.Imagem}
          alt={titulo}
        />
      )}

      <CardContent sx={{ display: "flex", flexDirection: 'column', alignItems: "start" }}>
        <Typography variant="h6" color={theme.palette.azul.main}>
          {titulo}
        </Typography>

        {Object.entries(dados).map(([chave, valor]) => (
          chave !== "Imagem" && ( 
            <Typography key={chave}>
              <strong>{chave}:</strong> {valor}
            </Typography>
          )
        ))}

        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
          {children}
        </Box>
      </CardContent>
    </Card>
  )
}


export default CardGenerico
