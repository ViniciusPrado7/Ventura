import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

const Footer = () => {

  const theme = useTheme();

  return (
    <Box
      position="static"
      color="default"
      sx={{ mt: 3, display: "flex", justifyContent: "center", alignItems: "center", background: theme.palette.azul.main, height: 50 }}>
      <Typography sx={{ color: "white" }}>
        Desenvolvido por Vinícius Prado
      </Typography>
    </Box>
  )
}

export default Footer