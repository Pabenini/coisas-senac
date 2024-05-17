const express = require('express')
const app = express()
/* Instalação do cors para permitir acesso a api - 
CORS (Cross-Origin Resource Sharing): 
Permitir solicitações cross-origin. Adicionando cabeçalhos CORS à resposta do servidor. 
No Node.js pode usar o pacote cors para configurar
  npm install --save cors
*/
var cors = require('cors')
/**
 * Configuração do middleware Express.js para habilitar o CORS (Cross-Origin Resource Sharing) em uma aplicação Node.js
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
  app.use(cors());
  next();
});

// A linha abaixo permitirá requisições do body para o POST
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Rota Inicial')
})

app.get('/cursos', (req, res) => {
  res.json({
    "id": 1,
    "nome": "Curso de Informática"
  })
})

app.post('/alunos', (req, res) => {
  const nome = req.body.nome
  return res.send(nome)
})

app.post('/professores', (req, res) => {
  // Utilizando a desestruturação
  const { nome } = req.body
  return res.send(nome)
})

//Criação do array cursos
// let senac = ['Info', 'Adm', 'Logística', 'ST']
let senac = {
  "videos": [
    {
      "id": 1,
      "titulo": "Bruno Mars",
      "link": "https://www.youtube.com/watch?v=-nt_u4vo-DI"
    },
    {
      "id": 2,
      "titulo": "Jason Mraz - I'm Yours",
      "link": "https://www.youtube.com/watch?v=EkHTsc9PU2A"
    },
  ]
}

//Retorna todos os cursos
app.get('/lista-cursos', (req, res) => {
  return res.json(senac)
})
// Pegando apenas 1 curso
// localhost:4000/lista-cursos/0
app.get('/lista-cursos/:index', (req, res) => {
  const { index } = req.params;
  return res.json(senac[index]);
})

// Inserir um novo curso
app.post('/inserir-cursos', (req, res) => {
  const { name } = req.body;
  senac.push(name)
  // Retorno dos dados via json
  return res.json(senac);
})

app.put('/atualizar-cursos/:index', (req, res) => {
  // Pega o index do curso que será atualizado
  const { index } = req.params;
  // Pega o novo nome do curso
  const { name } = req.body;
  senac[index] = name
  // Retorno dos dados via json
  return res.json(senac);
})

app.delete('/excluir-cursos/:index', (req, res) => {
  // Pega o index do curso que será deletado
  const { index } = req.params;
  // splice -> usado para remover elemento do array
  // splice(indice, qtd_elementos)
  senac.splice(index, 1)
  // Retorno dos dados via json
  return res.json(senac);
})

// Cookie
// Instale o cookie-parser - cookie-parser é um middleware do Express para analisar cookies no cabeçalho HTTP
// npm install cookie-parser

// Instancia do cooke-parser
const cookieParser = require('cookie-parser');
//middleware que é usado para analisar os cookies incluídos no cabeçalho da solicitação HTTP
app.use(cookieParser());

// Rota para definir o cookie
app.get('/set-cookie', (req, res) => {
  // objeto cookedData - Dados que queremos armazenar no cookie
  const cookieData = {
    username: 'senac',
    language: 'pt-br'
  };
  // Convertendo os dados para JSON
  const cookieJSON = JSON.stringify(cookieData);
  // Configurando o cookie - nome do cookie -> cookieName
  // maxAge (tempo de vida do cookie em milissegundos) e httpOnly (define se o cookie só pode ser acessado por HTTP)
  res.cookie('my_cookie', cookieJSON, { maxAge: 3600000 });
  res.send('Cookie definido com sucesso!');
});

// Rota para visualizar os cookies
app.get('/get-cookies', (req, res) => {
  res.send(req.cookies);
});

// Rota para visualizar um cookie específico
app.get('/get-cookie', (req, res) => {
  const my_cookie = req.cookies.my_cookie;
  if (my_cookie) {
    res.send(my_cookie);
  } else {
    res.send('Cookie não encontrado');
  }
});


// Session
// npm install express-session
const session = require('express-session');

// Configuração do middleware de sessão
app.use(session({
  secret: 'seu_segredo_aqui', // Chave secreta, exclusiva para o express
  resave: false, // Não irá regravar a sessão
  saveUninitialized: true // saveUninitialized: true
}));

// Rota para definir a sessão
app.get('/set-session', (req, res) => {
  req.session.user = { username: 'nelcijunior', preferences: { theme: 'dark', language: 'pt-br' } };
  res.send('Sessão definida com sucesso!');
});

// Rota para acessar a sessão
app.get('/get-session', (req, res) => {
  const user = req.session.user;
  if (user) {
    res.send(user);
  } else {
    res.send('Sessão não encontrada');
  }
});

app.get('/logout', (req, res) => {
  // Destruir a sessão
  req.session.destroy(err => {
    if (err) {
      console.error('Erro ao encerrar sessão:', err);
      res.status(500).send('Erro ao encerrar sessão');
    } else {
      // Redirecionar o usuário para uma página de login ou página inicial
      res.redirect('/get-session');
    }
  });
});




app.listen(4000, () => {
  console.log('Servidor Iniciado')
})