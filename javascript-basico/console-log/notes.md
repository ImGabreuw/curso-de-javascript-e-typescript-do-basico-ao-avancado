# `Console.log`

### Função

* Imprimir algum valor na tela do terminal, e depois pula uma linha (quebra de linha)

### Sintaxe

```js
console.log(<objeto/valor>);
```

> **OBS**: a utilização do ponto e vírgula (`;`), no final de cada instrução, é opcional no JavaScript

### Formas de imprimir uma String no `console.log`

```js
console.log("Luiz Otávio");
// ou 
console.log('Luiz Otávio');
// ou 
console.log(`Luiz Otávio`);
```

> **OBS**: é possível utilizar **aspas simples** (`''`) ou **aspas duplas**(`""`) para declarar um String

### Colocar aspas dentro de uma String para ser impressa no terminal

```js
console.log("Luiz 'Otávio'");
```

```js
console.log('Luiz "Otávio"');
```

* **Conclusão**: para utilizar aspas dentro de uma String é necessário utilizar **um tipo de aspas para declarar a String** e **a outra para ser impressa no terminal**

### Template Strings (interpolação de Strings)

### Função

* Concatenar Strings de forma mas elegante

* Utilizar **aspas simples** e/ou **duplas dentro** dentro da mesma String

  ```js
  console.log(`'Luiz' "Otávio"`)
  ```

### Imprimir um número no `console.log`

```js
console.log(123456) // 123456 = Number
```

> **IMPORTANTE**: não utilizar aspas (simples ou duplas), pois com isso o número se tornaria uma String

### Números inteiros e flutuantes

* **Números inteiros**

  * São números sem casas decimais

  * **Exemplo**

    ```js
    console.log(123456)
    ```

* **Números flutuantes**

  * São números com casas decimais (com pontos flutuantes, na programação)

  * **Exemplo**

    ```js
    console.log(15.123456)
    ```

### Imprimir vários valores sem pulas linha

```js
console.log(12, 15.85, "Luiz Otávio de novo");
```