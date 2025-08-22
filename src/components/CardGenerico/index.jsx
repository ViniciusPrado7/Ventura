import { Card, CardContent, Typography, Button, Box, useTheme } from '@mui/material'

const CardGenerico = ({ titulo, dados, onExcluir }) => {

  const theme = useTheme();

  return (
    <Card sx={{
      minWidth: 400,
      width: "auto",
      border: `2px solid ${theme.palette.azul.main}`,
      m: 1
    }}>
      <CardContent sx={{ display: "flex", flexDirection: 'column', alignItems: "start" }}>
        <Typography variant="h6" color={theme.palette.azul.main}>
          {titulo}
        </Typography>

        {Object.entries(dados).map(([chave, valor]) => (
          <Typography key={chave}>
            <strong>{chave}:</strong> {valor}
          </Typography>
        ))}
        {onExcluir && (
          <Box sx={{ mt: 2 }}>
            <Button variant="outlined" color="error" onClick={onExcluir}>
              Excluir
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

export default CardGenerico
