const express = require('express')
const app = express()

// Rota 1
app.get('/', (req, res) => {
    res.send("Rota Inicia")
})

// Rota 2
app.get('/cursos', (req, res) => {
    res.send("Rota Cursos")
})

// Rota 3
app.get('/dado', (req, res) => {
    res.json(
        {
            "Id": 1,
            "Descricao" : "Senac"
        }
    )
})

app.listen(2000, function(error){
    if(error){
        console.log('Servidor NÃO INICIADO')
    }else{
        console.log('Servidor INICIADO')
    }
})