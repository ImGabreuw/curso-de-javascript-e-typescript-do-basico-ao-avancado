# Babel e "can i use..."

> ## **Site "can i use"**

### **Definição**

É um site para verificar se um determinada ferramenta/funcionalidade é suportada em cada um dos navegadores utilizado nos dias atuais.

---

> ## **Babel**

### **Definição**

É um *transpilador* (tradutor + compilador) para código legado, ou seja, o Babel é responsável por converter um código escrito em "JavaScript Moderno" para um código mais antigo, que é suportado pelos navegadores mais antigos (como o Internet Explorer).

### **Instalação**

```shell
$ npm install --save-dev @babel/cli @babel/preset-env @babel/core
```

### **Transpilar um código**

* Sintaxe:

  ```sh
  $ npx babel [arquivo] -o [arquivo de saída] --presets=[presets]
  ```

  * `[arquivo]`: é o nome do arquivo que será transpilado pelo Babel

  * `[arquivo de saída]`: é o nome do arquivo que irá conter o código transpilado. Por convenção esse arquivo é denominado de `bundle.js`, pois ele pode ser a junção (*bundle*) de vários arquivos JavaScript

  * `[presets]`: o *preset* é um argumento necessário para que o Babel possa realizar o processo de transpilação do código fonte

* Exemplo:

  ```sh
  $ npx babel main.js -o bundle.js --presets=@babel/env
  ```

### Código fonte VS Código transpilado

* Código fonte:

  ```js
  class Pessoa {
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
  }
  ```

* Código transpilado:

  ```js
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Pessoa = /*#__PURE__*/_createClass(function Pessoa(nome, sobrenome) {
    _classCallCheck(this, Pessoa);

    this.nome = nome;
    this.sobrenome = sobrenome;
  });
  ```

### **OBS**

Em ambiente de produção, será utilizado o código gerado pelo Babel (`bundle.js`), afim dar suporte a todos os navegadores:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script src="bundle.js"></script>
</body>
</html>
```

### **Realizar o processo de transpilação e carregamento do arquivo gerado pelo Babel de forma automática**

1. Adicionar o comando de transpilação na chave `scripts` do `package.json`:

    ```json
    // ...
    "scripts": {
      "babel": "babel [arquivo] -o [arquivo saída] --presets=@babel/env -w",
    },
    // ...
    ```

    > **Flag `-w`**: é responsável por monitor (*watch*) qualquer alteração no `[arquivo]` (especificado no comando) após ter sido salvo, e então iniciar o processo de transpilação desse arquivo.

2. Executar o `script` com `npm run babel`

---

> ## **NPM**

### **Definição**

**NPM**: *Node Package Manager*

É o gerenciador de pacotes do JavaScript (parecido com o Maven/Gradle no Java).

### **Comandos**

* `$ npm init`: iniciar um projeto Node modularizado (com `package.json`)

* `$ npm install --save-dev`: instalar um pacote e salvá-la como dependência de desenvolvimento

* `$ npm install @[nome do pacote]@[versão]`: instalar uma versão específica de um pacote 

* `$ npm run [script]`: executar um `[script]` (especificado na chave `scripts` no arquivo `package.json`) a partir do nome da chave desse `[script]`