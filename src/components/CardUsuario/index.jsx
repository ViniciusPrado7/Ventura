import React from 'react'
import { Card, CardContent, Typography, Button, Box } from '@mui/material'

const azulClaro = '#1976d2';

const CardUsuario = ({ usuario, onExcluir }) => {
    return (
        <Card sx={{
            width: 450,
            height: 200,
            border: "1px solid gray"
        }}
        >
            <CardContent sx={{
                display: "flex",
                flexDirection: 'column',
                alignItems: "start",            
            }} >
                <Typography variant="h6" color={azulClaro}>{usuario.nome}</Typography>
                <Typography><strong>Email:</strong> {usuario.email}</Typography>
                <Typography><strong>Telefone:</strong> {usuario.telefone}</Typography>

                <Box sx={{ mt: 5 }}>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={onExcluir}
                    >
                        Excluir
                    </Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default CardUsuario
