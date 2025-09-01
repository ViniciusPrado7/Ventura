import { Box, Button } from '@mui/material'
import FormCadastro from '../components/FormCadastro'
import { useState } from 'react'
import { toast } from 'react-toastify'
import CardUsuario from '../components/Cards/CardUsuario'

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

  const Cadastro = (e) => {
    e.preventDefault()
    if (!validarCampos()) return

    const novoUsuario = {
      nome,
      email,
      telefone,
      senha,
      tipo: "usuário" // Agora o card vai exibir o tipo
    }

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
    notifySuccess("Usuário excluído!")
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

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        p: 2
      }}>
        {usuarios.map((usuario, index) => (
          <CardUsuario
            key={index}
            usuario={usuario}
          >
            <Button
              variant="outlined"
              color="error"
              onClick={() => excluirUsuario(index)}
            >
              Excluir
            </Button>
          </CardUsuario>
        ))}
      </Box>
    </>
  )
}

export default Usuarios
