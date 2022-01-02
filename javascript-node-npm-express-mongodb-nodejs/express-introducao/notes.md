# Express - Introdução

> ## **Express**

### **Definição**

É um framework para trabalhar com aplicações Web no ecossistema Node.

É responsável por facilitar a configuração das rotas (*end-points*) da aplicação.

### **Configuração**

1. Importar o *express*:

  ```js
  const express = require("express");
  ```

2. Criar a aplicação com *express*:

  ```js
  const app = express();
  ```

  > `app` é a convenção de nomenclatura para a variável que armazena o contexto da aplicação.

3. Definir a porta que a aplicação estará ouvindo:

  ```js
  app.listen(3000);
  ```

  > **OBS**: `3000` é a porta padrão utilizada para aplicações *express*

  > **porta** representa um processo em execução na máquina. Dessa forma, não é possível ter 2 aplicações rodando na mesma porta (gera um erro).

### **Roteamento**

* **Definição**: a declaração das rotas são feitas a partir de um **método (verbo) HTTP**, um **caminho** e uma **função para tratar a requisição e a resposta**

* **Exemplo**

  ```js
  app.get("/", (req, res) => {
    res.send("Hello world!");
  });
  ```

  * `get()`: método HTTP **GET**

  * `"/"`: caminho do *end-point*

  * `(req, res) => res.send("Hello world!")`: função para tratar *requisição-resposta*

  ```js
  app.post("/", (req, res) => {
    res.send("Recebi o formulário.");
  });
  ```

  * `post()`: método HTTP **POST**

  * `"/"`: caminho do *end-point*

  * `(req, res) => res.send("Hello world!")`: função para tratar *requisição-resposta*