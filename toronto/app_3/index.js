const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Rota inicia")
})

app.get('/contato', (req, res) => {
    res.send('Rota Contato')
})

app.get('/aluno', (req, res) => {
    res.json(
        {
            "idAluno": 1,
            "nomeAluno": "Alan"
        }
    )
})

app.get('/professor', (req, res) => {
    res.json(
        {
            "idProfessor": 1,
            "nomeProfessor": "Tal"
        }
    )
})

app.listen(1000, (error) => {
    console.log('Iniciado')
})