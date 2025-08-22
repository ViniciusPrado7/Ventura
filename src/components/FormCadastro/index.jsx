import { Box, Button, FormControl, FormLabel, Input, useTheme } from '@mui/material';

const FormCadastro = ({ nome, setNome, email, setEmail, senha, setSenha, telefone, setTelefone, cadastro }) => {

    const theme = useTheme();

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
                    border: `1px solid ${theme.palette.azul.main}`,
                    display: "flex",
                    flexDirection: "column"

                }}
            >
                <form onSubmit={cadastro} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <FormControl fullWidth required>
                        <FormLabel sx={{color: theme.palette.azul.main }}>
                            Nome
                        </FormLabel>
                        <Input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite seu nome"
                        />
                    </FormControl>

                    <FormControl fullWidth required>
                        <FormLabel sx={{ color: theme.palette.azul.main }}>Email</FormLabel>
                        <Input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Digite seu email" />
                    </FormControl>

                    <FormControl fullWidth required>
                        <FormLabel sx={{ color: theme.palette.azul.main }}>Telefone</FormLabel>
                        <Input type='tel' onChange={(e) => setTelefone(e.target.value)} value={telefone} placeholder="Digite seu telefone" />
                    </FormControl>

                    <FormControl fullWidth required>
                        <FormLabel sx={{ color: theme.palette.azul.main }}>Senha</FormLabel>
                        <Input type='password' onChange={(e) => setSenha(e.target.value)} value={senha} placeholder="Digite sua senha" />
                    </FormControl>

                    <Button type='submit' variant="contained" sx={{ backgroundColor: theme.palette.azul.main, color: 'white', alignSelf: 'center' }}>
                        Cadastrar
                    </Button>
                </form>

            </Box>
        </Box>


    )
}

export default FormCadastro