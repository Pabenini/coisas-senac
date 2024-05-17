const express = require('express')
const app = express()
//a linha abaixo permitirá requisições do body para o POST
app.use(express.json());

//rota1
app.get('/', (req, res) => {
    res.send('Raiz do projeto')
})

//Rota2
app.get('/contato', (req, res) => {
    res.send('Página Contato')
})

//Rota3 - json
app.get('/sobre', (req, res) => {
    res.json(
        {
            "nome": "Pedro",
            "profissão": "desempregado"
        }
    )
})

// crie 2 rotas
    //1 - retorne na tela -> hello world
    //2 - retorne json com os dados endereço, numero, bairro e cidade

//rota4
app.get('/hello', (req, res) => {
    res.send('Hello World')
})
//rota5
app.get('/dados', (req, res) => {
    res.json(
        {
            "endereço": "Rua num sei das quantas",
            "numero": "83",
            "bairro": "lá longe",
            "cidade": "bequinho"
        }
    )
})

//post
app.post('/cursos', (req, res) => {
    const {nome} = req.body;
    return res.send(nome);
})

app.listen(4000, function(error){
    if(error){
        console.log('Servidor NÃO INICIADO')
    }else{
        console.log('Servidor INICIADO')
    }
})