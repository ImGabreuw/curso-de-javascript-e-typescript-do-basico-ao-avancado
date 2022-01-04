# MongoDB - Conexão e primeiro Model

> ## **`dotenv`**

### **Definição**

É uma biblioteca para manipulação de variáveis de ambiente.

**IMPORTANTE**: NUNCA colocar dados sensíveis diretamente (senhas, credenciais, etc) no código fonte.

### **Configuração**

1. Instalar o pacote do `dotenv` com NPM

    ```sh
    $ npm i dotenv
    ```

2. Criar o arquivo `.env` na raiz do projeto e adicionar as *secrets* no formato de `chave=valor`. Exemplo:

    ```
    USUARIO=meuusuario
    SENHA=minhasenha
    ```

3. Configurar o `dotenv` no arquivo de entrada da aplicação:

    ```js
    require("dotenv").config();
    ```

> ## **`mongoose`**

### **Definição**

É uma biblioteca para trabalhar com MongoDB. Ele fornece validações de propriedade, declaração de *schemas* a partir de um objeto do JavaScript, entre outras funcionalidades.

### **Configuração**

1. Instalar o pacote do `mongoose` com NPM:

    ```sh
    $ npm i mongoose
    ```

2. Importar o pacote do `mongoose` na aplicação:

    ```js
    const mongoose = require("mongoose");
    ```

3. Realizar uma conexão com o MongoDB:

    ```js
    mongoose.connect(process.env.CONNECTION_STRING)
    ```

    > **OBS**: `process.env.CONNECTION_STRING` é a string de conexão do banco de dados MongoDB armazenada no arquivo `.env`

### **Criar um *schema***

1. Importar o `mongoose` no módulo:

    ```js
    const mongoose = require("mongoose");
    ```

2. Definir o *schema* do Model:

    ```js
    new mongoose.Schema({
      [nome da propriedade]: [definições dessa propriedade],
      // ...
    })
    ```

    > `[definições dessa propriedade]` é um objeto que armazena o tipo de dado e as validações de uma propriedade.

3. Configurar esse *schema* como novo `model` no contexto do `mongoose`:

    ```js
    ongoose.model(
      [nome do model],
      [referência do schema]
    );
    ```

* **Exemplo**

  ```js
  const mongoose = require("mongoose");

  const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
  })

  const HomeModel = mongoose.model("Home", HomeSchema);

  module.exports = HomeModel;
  ```

### **Salvar um dado no banco de dados**

* **Sintaxe**

  ```js
  create([objeto model])
  ```
* **Exemplo**

  ```js
  const HomeModel = require("../models/HomeModel");

  HomeModel.create({
    titulo: "Um título de testes",
    descricao: "Uma descrição de testes.",
  })
    .then((dados) => console.log(dados))
    .catch((err) => console.log(err));

  /*
  {                                            "),
    titulo: 'Um título de testes',
    descricao: 'Uma descrição de testes.',     
    _id: new ObjectId("61d4594ef61c911d95a7abe3"),
    __v: 0
  }
  */
  ```

### **Listar todos os dados salvos no banco de dados**

```js
const HomeModel = require("../models/HomeModel");

HomeModel.find()
  .then((dados) => console.log(dados))
  .catch((err) => console.log(err));

/*
[
  {
    _id: new ObjectId("61d4594ef61c911d95a7abe3"),
    titulo: 'Um título de testes',
    descricao: 'Uma descrição de testes.',
    __v: 0
  },
  {
    _id: new ObjectId("61d45a2a3219b1ccdee2c4a2"),
    titulo: 'Um título de testes',
    descricao: 'Uma descrição de testes.',
    __v: 0
  }
]
*/
```