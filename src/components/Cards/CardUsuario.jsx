import { Card, CardContent, Typography, Box, Avatar, useTheme } from '@mui/material';

const CardUsuario = ({ usuario, children }) => {
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
      <CardContent sx={{ display: "flex", flexDirection: 'column', gap: 1 }}>
        <Typography variant="h6" color={theme.palette.azul.main}>
          {usuario.nome}
        </Typography>

        <Typography>
           <strong>Email:</strong> {usuario.email}
        </Typography>

        <Typography >
          <strong>Telefone:</strong> {usuario.telefone}
        </Typography>

        <Box sx={{ mt: 2 }}>
          {children}
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardUsuario;
