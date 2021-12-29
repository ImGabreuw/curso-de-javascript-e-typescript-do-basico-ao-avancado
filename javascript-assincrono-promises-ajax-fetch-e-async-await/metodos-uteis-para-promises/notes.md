# Métodos úteis para Promises

> ## **Método `Promise.all()`**

### **Definição**

Esse método executa um `array` de `Promises` e retorna uma `Promise` resolvida, caso todas as promessas forem resolvidas ou retorna apenas a `Promise` rejeitada (e não executará as outras `Promises`), caso alguma promessa seja rejeitada.

### **Exemplo**

```js
function gerarTempoAleatorio(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperar(mensagem) {
  return new Promise((resolve, reject) => {
    if (typeof mensagem !== "string") {
      reject("Valor inválido");
      return;
    }

    setTimeout(() => {
      resolve(mensagem);
    }, gerarTempoAleatorio(1, 3));
  });
}

const promises = [
  "Primeiro valor",
  esperar("Promise 1"),
  esperar("Promise 2"),
  esperar("Promise 3"),
  "Segundo valor",
];

Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

/*
[
  'Primeiro valor',
  'Promise 1',     
  'Promise 2',     
  'Promise 3',     
  'Segundo valor'  
]
*/
```

> ## **Método `Promise.race()`**

### **Definição**

Esse método retorna a primeira `Promise` resolvida em um `array` de `Promises`.

### **Exemplo**

```js
function gerarTempoAleatorio(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperar(mensagem) {
  return new Promise((resolve, reject) => {
    if (typeof mensagem !== "string") {
      reject("Valor inválido");
      return;
    }

    setTimeout(() => {
      resolve(mensagem);
    }, gerarTempoAleatorio(1, 3));
  });
}

const promises = [
  "Primeiro valor",
  esperar("Promise 1"),
  esperar("Promise 2"),
  esperar("Promise 3"),
];

Promise.race(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

// "Primeiro valor"
```

> No exemplo acima, `"Primeiro valor"` será retornado todas as vezes, uma vez que ela já é um `Promise` resolvida ou rejeitada.

```js
function gerarTempoAleatorio(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperar(mensagem) {
  return new Promise((resolve, reject) => {
    if (typeof mensagem !== "string") {
      reject("Valor inválido");
      return;
    }

    setTimeout(() => {
      resolve(mensagem);
    }, gerarTempoAleatorio(1, 3));
  });
}

const promises = [
  esperar("Promise 1"),
  esperar("Promise 2"),
  esperar("Promise 3"),
];

Promise.race(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

// Promise 2
```

> ## **Método `Promise.resolve()`**

### **Definição**

Esse método retorna uma `Promise` já resolvida.

### **Exemplo**

```js
function gerarTempoAleatorio(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperar(mensagem) {
  return new Promise((resolve, reject) => {
    if (typeof mensagem !== "string") {
      reject("Valor inválido");
      return;
    }

    setTimeout(() => {
      resolve(mensagem);
    }, gerarTempoAleatorio(1, 3));
  });
}

function baixarPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.resolve("Página em cache");
  }

  return esperar("Página baixada");
}

baixarPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(erro => console.log(erro));

// Página em cache
```

> ## **Método `Promise.reject()`**

### **Definição**

Esse método retorna uma `Promise` já rejeitada.

### **Exemplo**

```js
function gerarTempoAleatorio(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperar(mensagem) {
  return new Promise((resolve, reject) => {
    if (typeof mensagem !== "string") {
      reject("Valor inválido");
      return;
    }

    setTimeout(() => {
      resolve(mensagem);
    }, gerarTempoAleatorio(1, 3));
  });
}

function baixarPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Página em cache");
  }

  return esperar("Página baixada");
}

baixarPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(erro => console.log("ERRO:", erro));

// ERRO: Página em cache
```