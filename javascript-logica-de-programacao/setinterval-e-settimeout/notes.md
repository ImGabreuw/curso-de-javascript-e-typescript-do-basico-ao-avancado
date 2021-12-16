# setInterval e setTimeout

> ## Definição

* Essas funções estão disponíveis no navegador e no `node`

* Tem a função de controlar timers no JavaScript

---

> ## setInterval

### Definição

Executar uma função de tempos em tempos

### Sintaxe

```js
setInterval([referência da função], [intervalo em milissegundos])
```

> **Referência da função** = apenas o nome da função (sem os parênteses)

```js
setInterval([função anônima / arrow function], [intervalo em milissegundos])
```

> A forma acima é a implementação mais comum

### Exemplo

* `setInterval()` a partir de uma referência da função

  ```js
  function obterHora() {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {
      hour12: false
    });
  }

  function mostrarHora() {
    console.log(obterHora())
  }

  setInterval(mostrarHora, 1000);
  ```

* `setInterval()` a partir de uma função anônima/*arrow function*

  ```js
  function obterHora() {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {
      hour12: false
    });
  }

  function mostrarHora() {
    console.log(obterHora())
  }

  setInterval(function() {
    mostrarHora();
  }, 1000);
  ```

  ```js
  function obterHora() {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {
      hour12: false
    });
  }

  function mostrarHora() {
    console.log(obterHora())
  }

  setInterval(() => mostrarHora(), 1000);
  ```

---

> ## setTimeout

### Definição

Executar uma função uma única vez após um intervalo específico (passado como argumento na função)

### Exemplo

```js
function obterHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false
  });
}

function mostrarHora() {
  console.log(obterHora())
}

const timer = setInterval(
  () => mostrarHora(), 
  1000
);

setTimeout(() => clearTimeout(timer), 5 * 1000);

/*
11:32:32
11:32:33
11:32:34
11:32:35
*/
```
