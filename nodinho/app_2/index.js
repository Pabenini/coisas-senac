const express = require('express')
const app = express()

// A linha abaixo permitirá requisições do body para o POST
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Rota Inicial diacho')
})

app.get('/cursos', (req, res) => {
    res.json(
        {
            "id": 1,
            "nome": "Pedro"
        }
    )
})

app.post('/alunos', (req, res) => {
    const nome = req.body.nome
    return res.send(nome)
})

app.post('/professores', (req, res) => {
    const { nome } = req.body
    return res.send(nome)
})

//Criação do array cursos
let senac = ['Info', 'Adm', 'Logística', 'ST']

//Retorna todos os cursos
app.get('/lista-cursos', (req, res) => {
    return res.json(senac)
})

//Pegando apenas 1 cursos
//localhost:4000/lista-cursos/0
app.get('/lista-cursos/:index', (req, res) => {
    const { index } = req.params;
    return res.json(senac[index]);
})

// Inserir um novo curso
app.post('/inserir-cursos', (req, res) => {
    const {name} = req.body;
    senac.push(name)
    // Retorno dos dados via json
    return res.json(senac);
})

app.put('/atualizar-cursos/:index', (req, res) => {
    // Pega o index do curso que será atualizado
    const {index} = req.params;
    // Pega o novo nome do curso
    const {name} = req.body;
    senac[index] = name 
    // Retorno dos dados via json
    return res.json(senac);
})

app.delete('/excluir-cursos/:index', (req, res) => {
    // Pega o index do curso que será deletado
    const {index} = req.params;
    // splice -> usado para remover elemento do array
    // splice(indice, qtd_elementos)
    senac.splice(index, 1)
    // Retorno dos dados via json
    return res.json(senac);
})

// Cookies
// Instale o cookie-parser - cookie-parser é um middleware do Express para analisaar cookies no cabeçalho HTTP
// npm install cokkie-parser

// Instancia do cookie-parser
const cookieParser = require('cookie-parser');
// Middleware que é usado para analisar os cookies incluidos no cabeçalho da solicitação HTTP
app.use(cookieParser());

// Rota para definir o cookie
app.get('/set-cookie', (req, res) => {
    // Objeto cookedData - Dados que queremos armazenar no cookie
    const cookieData = {
        username: 'NelciJunior',
        preferences: {
            theme: 'dark',
            language: 'pt-br'
        }
    };
    // Convertendo os dados para JSON
    const cookieJSON = JSON.stringify(cookieData);
    // Configurando o cookie - nome do cookie -> cookieName
    // maxAge (tempo de vida do cookie em milissegundos) e httpOnly (define se o cookie so pode ser acessado por HTTP)
    res.cookie('cookieName', cookieJSON, { maxAge: 3600000, httpOnly: true});
    res.send('Cookie definido com sucesso!');
});

// Rota para visualizar os cookies um cookie especifico
app.get('/get-cookie', (req, res) => {
    const cookieName = req.cookies.cookieName;
    if (cookieName) {
        res.send(cookieName);
    } else {
        res.send('Cookie não encontrado');
    }
});

// Session
// npm install express-session
// const session = require('express-session');

app.listen(4000, (error) => {
    console.log('Servidor Iniciado')
})