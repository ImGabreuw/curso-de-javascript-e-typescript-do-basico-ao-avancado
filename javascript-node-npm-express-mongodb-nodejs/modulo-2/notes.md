# Módulos (2)

> ## **Executar uma função exportada**

```js
module.exports = function(x, y) {
  return x * y;
}

console.log(module.exports(2, 2)); // 4
```

> ## **Imports**

### **Definição**

É opcional informar a extensão do arquivo ao importar um arquivo.

### **Exemplo**

```js
```

> ## **`__filename`**

### **Definição**

Obter o nome do arquivo atual (que está utilizando essa variável global).

### **Exemplo**

```js
console.log(__filename);

/*
d:\Projects\curso-de-javascript-e-typescript-do-basico-ao-avancado\javascript-node-npm-express-mongodb-nodejs\modulo-2\projects\exemplo-2.js
*/
```

> ## **`__dirname`**

### **Definição**

Obter o diretório que o arquivo atual (que está utilizando essa variável global) pertence.

### **Exemplo**

```js
console.log(__dirname);

/*
d:\Projects\curso-de-javascript-e-typescript-do-basico-ao-avancado\javascript-node-npm-express-mongodb-nodejs\modulo-2\projects
*/
```

> ## **Modulo `path`**

### **Definição**

É o módulo padrão do Node para se trabalhar com caminhos.

### **Configuração**

```js
const path = require("path");
```

### Método `resolve()`

* **Definição**: esse método tem a função de resolver os separadores de caminho (`/` ou `\`) para cada sistema operacional.

* **Exemplo**

```js
const path = require("path");

console.log(path.resolve(__dirname, ".", "exemplo-3.js"));

/*
d:\Projects\curso-de-javascript-e-typescript-do-basico-ao-avancado\javascript-node-npm-express-mongodb-nodejs\modulo-2\projects\exemplo-3.js
*/
```