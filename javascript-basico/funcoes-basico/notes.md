# Funções (Básico)

### Função

Declarar trechos que códigos que podem ser reutilizados ao longo da aplicação

### Definição

* Toda função, por padrão, retorna `undefined`

* Para retornar um valor em uma função, basta utilizar a palavra reservada `return`

* O trecho de código dentro da função está em um escopo isolado

  ```js
  function soma(x, y) {
    const resultado = x + y;
    return resultado;
  }

  const resultado = soma(2, 2);
  console.log(resultado); // 4
  ```

* Parâmetros com valores padrão

  ```js
  function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
  }

  console.log(soma(2, 2)); // 4
  console.log(soma(2)); // 3
  console.log(soma()); // 2
  ```

* Funções anônimas

  > Função é um objeto (`object`) no JavaScript, logo ela pode ser atribuido a uma variável (`const` ou `let`)

  ```js
  const raiz = function(n) {
    return Math.sqrt(n);
  }

  console.log(raiz(9)); // 3
  console.log(raiz(16)); // 4
  console.log(raiz(25)); // 5
  ```

* *Arrow functions* (expressões lambdas)

  ```js
  const raiz = n => Math.sqrt(n);

  console.log(raiz(9)); // 3
  console.log(raiz(16)); // 4
  console.log(raiz(25)); // 5
  ```

* Parâmetro VS argumento

  * **Argumento**: é o valor passado no argumento de uma função

  * **Parâmetro**: é o valor que uma função aceita (assinatura da função)

### Sintaxe

```js
function nomeDaFuncao(parametro1, parametro2) {
  // Corpo da função
}
```

### Exemplo

```js
function saudacao(nome) {
  console.log(`Bom dia ${nome}!`);
}

saudacao("Gabriel"); // Bom dia Gabriel!
saudacao("Maria"); // Bom dia Maria!
```

```js
function saudacao(nome) {
  console.log(`Bom dia ${nome}!`);
}

const funcaoSemRetorno = saudacao("Gabriel"); // Bom dia Gabriel!

console.log(retornoDaFuncao); // undefined
```

```js
function saudacao(nome) {
  return `Bom dia ${nome}!`;
}

const funcaoComRetorno = saudacao("Gabriel");

console.log(retornoDaFuncao); // Bom dia Gabriel!
```