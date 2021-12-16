# Maneiras de declarar funções

> ## *Function hoisting* (elevação de funções)

### **Definição**

JavaScript eleva todas as declarações de funções (apenas aquelas declaras com `function`) para o topo do arquivo na hora de execução do mesmo.

### **Exemplo**

* **Código escrito**

  ```js
  falaOi();

  // Código ...

  function falaOi() {
    console.log("Oi");
  }

  // Código ...
  ```

* **Código em execução (*function hoisting*)**

  ```js
  function falaOi() {
    console.log("Oi");
  }

  // Código ...

  falaOi();

  // Código ...
  ```

---

> ## *First-class objects* (objetos de primeira classe)

### Definição

As função são objetos de primeira classe no JavaScript, então é possível atribuí-las a uma variável. Dessa modo passam a ser chamadas de *function expression* (expressão de função)

Esse comportamento possibilita que função tenham como parâmetro outra função, passando como argumento a referência de uma função

> **OBS**: *function expression* também pode ser chamado de função anônima, pois geralmente são são nomeadas

### Exemplo

* **Function expression**

  ```js
  const falaOi = function() {
    console.log("Oi");
  }

  falaOi();
  ```

* **Função como parâmetro**

  ```js
  const falaOi = function() {
    console.log("Oi");
  }

  function executarFuncao(funcao) {
    funcao();
  }

  executarFuncao(falaOi);
  ```

* **Function expression nomeadas**

  ```js
  const falaOi = function funcaoFalaOi() {
    console.log("Oi");
  }

  falaOi();
  ```

---

> ## Arrow function

### Definição

É uma forma simplificada de declarar funções

É considerado uma *function expression*

### Exemplo

* **Arrow function com 1 linha**

  ```js
  const falaOi = () => console.log("Oi");

  falaOi();
  ```

* **Arrow function com múltiplas linhas (bloco)**

  ```js
  const falaOi = () => {
    console.log("Oi");
    console.log("Olá");
  }

  falaOi();

  /*
  Oi
  Olá
  */
  ```

---

> ## Função em objetos

### Exemplo

```js
const pessoa = {
  falar: function() {
    console.log('Olá');
  }
}

pessoa.falar(); // Olá
```

```js
const pessoa = {
  falar: () => console.log('Olá')
}

pessoa.falar(); // Olá
```
