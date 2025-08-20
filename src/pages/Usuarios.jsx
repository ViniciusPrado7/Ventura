import { Box, Grid } from '@mui/material'
import FormCadastro from '../components/FormCadastro'
import { useState } from 'react'
import { toast } from 'react-toastify'
import CardUsuario from '../components/CardUsuario'

const Usuarios = () => {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [telefone, setTelefone] = useState("")
  const [usuarios, setUsuarios] = useState([])


  const notifyError = (msg) => toast.error(msg)
  const notifySuccess = (msg) => toast.success(msg)

  const validarCampos = () => {
    if (!nome.trim() || !email.trim() || !senha.trim() || !telefone.trim()) {
      notifyError("Preencha todos os campos")
      return false
    }
    return true
  }

  function Cadastro(e) {
    e.preventDefault()
    if (!validarCampos()) return

    const novoUsuario = { nome, email, telefone, senha }
    setUsuarios([...usuarios, novoUsuario])
    notifySuccess("Usuário Cadastrado!")

    setNome("")
    setEmail("")
    setTelefone("")
    setSenha("")
  }
  const excluirUsuario = (index) => {
    const novosUsuarios = [...usuarios]
    novosUsuarios.splice(index, 1)
    setUsuarios(novosUsuarios)
    notifySuccess("Usuário excluido!")
  }

  return (
    <>
      <FormCadastro
        nome={nome}
        setNome={setNome}
        email={email}
        setEmail={setEmail}
        telefone={telefone}
        setTelefone={setTelefone}
        senha={senha}
        setSenha={setSenha}
        cadastro={Cadastro}
      />
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2}>
          {usuarios.map((usuario, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardUsuario
                usuario={usuario}
                onExcluir={() => excluirUsuario(index)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Usuarios
