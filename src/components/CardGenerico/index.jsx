import { Card, CardContent, Typography, Button, Box } from '@mui/material'

const azulClaro = '#1976d2'

const CardGenerico = ({ titulo, dados, onExcluir }) => {
  return (
    <Card sx={{
      minWidth: 400,
      width: "auto",
      border: "1px solid gray",
      m: 1
    }}>
      <CardContent sx={{ display: "flex", flexDirection: 'column', alignItems: "start" }}>
        <Typography variant="h6" color={azulClaro}>
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
