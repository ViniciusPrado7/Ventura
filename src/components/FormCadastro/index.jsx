import { Box, Button, FormControl, FormLabel, Input } from '@mui/material';
import React from 'react'

const azulClaro = '#1976d2';

const FormCadastro = ({ nome, setNome, email, setEmail, senha, setSenha, telefone, setTelefone, cadastro }) => {
    return (

        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "75vh"
            }}
        >
            <Box
                sx={{
                    width: 600,
                    p: 3,
                    borderRadius: 2,
                    border: "1px solid gray",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <form onSubmit={cadastro} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <FormControl fullWidth required>
                        <FormLabel sx={{ color: azulClaro }}>Nome</FormLabel>
                        <Input type='text' onChange={(e) => setNome(e.target.value)} value={nome} placeholder="Digite seu nome" />
                    </FormControl>

                    <FormControl fullWidth required>
                        <FormLabel sx={{ color: azulClaro }}>Email</FormLabel>
                        <Input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Digite seu email" />
                    </FormControl>

                    <FormControl fullWidth required>
                        <FormLabel sx={{ color: azulClaro }}>Telefone</FormLabel>
                        <Input type='tel' onChange={(e) => setTelefone(e.target.value)} value={telefone} placeholder="Digite seu telefone" />
                    </FormControl>

                    <FormControl fullWidth required>
                        <FormLabel sx={{ color: azulClaro }}>Senha</FormLabel>
                        <Input type='password' onChange={(e) => setSenha(e.target.value)} value={senha} placeholder="Digite sua senha" />
                    </FormControl>

                    <Button type='submit' variant="contained" sx={{ backgroundColor: azulClaro, color: 'white', alignSelf: 'center' }}>
                        Cadastrar
                    </Button>
                </form>

            </Box>
        </Box>


    )
}

export default FormCadastro