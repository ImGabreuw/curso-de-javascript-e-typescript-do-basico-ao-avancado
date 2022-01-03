# Express Middlewares

> ## **Função de Middleware no Express**

### **Definição**

> "Um aplicativo do Express é essencialmente uma série de chamadas de funções de middleware." - [ExpressJS](https://expressjs.com/pt-br/guide/using-middleware.html)

São funções que interceptam a requisição e resposta e assim executar uma tarefa, por exemplo:

* Executar um código

* Fazer mudanças nos objetos de requisição e resposta

* Encerrar o ciclo de requisição-resposta

* Chamar a próxima função de middleware na pilha

Essas funções têm **acesso aos dados da requisição e da resposta**, por estarem no "meio de campo" entre eles.

### **Exemplo**

```js
function meuMiddleware(req, res, next) {
  console.log();
  console.log("Passei no middleware.");
  console.log();

  next(); // Chamar a função "paginaInicial"
}

route.get("/", meuMiddleware, homeController.paginaInicial);
```

> O parâmetro `next` é a referência para a próxima função de middleware na pilha.

```js
// routes.js
function meuMiddlewareEntreRequisicaoResposta(req, res, next) {
  console.log();
  console.log("Passei no middleware.");
  console.log();

  next(); // Chamar a função "paginaInicial()"
}

function middlewareAposResposta(req, res, next) {
  console.log();
  console.log("Ainda estou aqui.");
  console.log();
}

route.get("/", meuMiddlewareEntreRequisicaoResposta, homeController.paginaInicial, middlewareAposResposta);

// homeController.js
exports.paginaInicial = (req, res, next) => {
  res.render("index");
  next(); // Chamar a função "middlewareAposResposta()"
};
```

### **OBS**

Em aplicações que possuem muitos *middlewares*, é comum criar um diretório `middleware/` para centralizar todos eles.

### **Middleware global**

* **Definição**: um middleware global tem a função de interceptar todas as requisições e respostas da aplicação

* **Exemplo**

```js
// middleware.js
module.exports = (req, res, next) => {
  console.log();
  console.log("Passei no middleware global.");
  console.log();

  next();
}

// server.js
const meuMiddleware = require("./src/middlewares/middleware");

app.use(meuMiddleware);
app.use(routes);
```

> **IMPORTANTE**: sempre definir o *middleware* global (`app.use(meuMiddleware)`) antes de configurar as rotas (`app.use(routes)`).

### **Middleware para determinadas requisições/respostas**

```js
// middleware.js
module.exports = (req, res, next) => {
  if (req.body.nome) {
    console.log();
    console.log("Passei no middleware para requisições com o campo 'nome' no body.");
    console.log();
  }

  next();
}

// server.js
const meuMiddleware = require("./src/middlewares/middleware");

app.use(meuMiddleware);
app.use(routes);
```

> No caso acima, apenas as requisições com o `body` contendo um campo `nome` serão interceptados pelo *middleware*: `meuMiddleware`