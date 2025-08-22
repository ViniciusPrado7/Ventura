import { Box, Button, Input, List, ListItem,  Typography } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const azulClaro = '#1976d2';

const Tarefas = () => {
    
    const notifySuccess = (msg) => toast.success(msg)

    const [novaTarefa, setNovaTarefa] = useState("")
    const [listaTarefas, setListaTarefas] = useState([])

    const addTarefa = () => {
        if (novaTarefa.trim() === "") return;
        setListaTarefas([...listaTarefas, novaTarefa])
        notifySuccess("Tarefa adicionada.")
        setNovaTarefa("")
    }
    const removerTarefa = (index) => {
        const novaLista = listaTarefas.filter((_, i) => i !== index)
        setListaTarefas(novaLista)
        notifySuccess("Tarefa removida.")
    }

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
                    gap: 2
                }}
            >
                <Typography variant='h5' sx={{alignSelf: "center", color: azulClaro}}> Lista de Tarefas</Typography>
                <List >
                    {listaTarefas.map((tarefa, index) => (
                        <ListItem sx={{border: "1px solid gray", mt: 1, borderRadius: 1}}
                            key={index}      
                        >
                            {tarefa}
                            <Button
                                onClick={() => removerTarefa(index)}
                                 color="error"
                                 variant='outlined'
                                 sx={{  ml:'auto'}}                              
                            >
                                remover
                            </Button>
                        </ListItem>
                    ))}
                </List>
                <Input type="text"
                    onChange={(e) => setNovaTarefa(e.target.value)}
                    value={novaTarefa}
                    placeholder='Adicionar tarefa:'
                    sx={{mt: 6}}
                />
                <Button
                    onClick={addTarefa}
                    sx={{ backgroundColor: azulClaro, color: 'white', alignSelf: 'center', mt: 2 }}
                >
                    Adicionar tarefa
                </Button>
            </Box>
        </Box>
    )
}

export default Tarefas 