# Express Router e Controllers

> ## **Controllers**

### **Definição**

É a camada da arquitetura MVC onde é responsável pela interação com o usuário e definição dos *end-points* da aplicação.

### **Express**

No Express, os *controllers* são responsável por definir as funções que tratam as requisições e respostas para cada end-point da aplicação.

Cada *controller* deve ter apenas um contexto bem definido, ou seja, em `userController.js` só pode ter *end-points* relacionado ao usuário (*user*). Exemplo:

```js
// userController.js

exports.findAll = (req, res) => {
  // Listagem dos usuários
}

exports.save = (req, res) => {
  // Salvar o usuário
};

```

> ## **Router**

### **Definição**

É uma classe do *express* para configurar as rotas da aplicação.

### **Configuração**

1. Criar o arquivo `routes.js`

2. Importar o módulo *express*:

    ```js
    // routes.js
    const express = require("express");
    ```

3. Criar um objeto *Router*:

    ```js
    // routes.js
    const route = express.Router();
    ```

4. Importar os *controllers* e registrar as rotas deles:

    ```js
    const userController = require("./controllers/userController");

    route.get("/users", userController.findAll);
    route.post("/users", userController.save);

    // outras rotas ...
    ```

5. Exportas as rotas para que outros módulos possam usá-las:

    ```js
    module.exports = route;
    ```

6. Adicionar as rotas no contexto do *Express* (no arquivo de entrada da aplicação: `server.js`):

    ```js
    // server.js
    const routes = require("./routes");

    app.use(routes);
    ```