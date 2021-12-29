# Promises

> ## **Promises**

### **Definição**

É a forma mais moderna de se trabalhar com processos assíncronos.

Nas versões mais antigas era utilizado as *callback functions*, porém isso gerou um porblema chamado de "callback hell".

### **Sintaxe**

```js
new Promise(
  ([função "resolve"], [função "reject"])
)
```

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
    }

    setTimeout(() => {
      resolve(mensagem);
    }, gerarTempoAleatorio(1, 3));
  });
}

esperar("Frase 1")
  .then((resposta) => {
    console.log(resposta);
    return esperar("Frase 2");
  })
  .then((resposta) => {
    console.log(resposta);
    return esperar(12312312);
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((erro) => {
    console.log(erro);
  });
```

### **Problema: executar as funções na ordem que foram declaradas**

```js
function gerarTempoAleatorio(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperar(mensagem) {
  setTimeout(() => console.log(mensagem), gerarTempoAleatorio(1, 3));
}

esperar("Frase 1");
esperar("Frase 2");
esperar("Frase 3");
```

### **Soluções**

* Utilizando *callback functions*:

  ```js
  function gerarTempoAleatorio(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
  }

  function esperar(mensagem, callback) {
    setTimeout(() => {
      console.log(mensagem);

      if(callback) callback();
    }, gerarTempoAleatorio(1, 3));
  }

  // callback hell
  esperar("Frase 1", function() {
    esperar("Frase 2", function() {
      esperar("Frase 3");
    });
  });
  ```

  > Essa solução gera um outro problema: *callback hell*

---

> ## Método `then()`

### **Definição**

O método `then()` só é executado quando uma promessa (`Promise`) for resolvido (a função `resolve()` for executada na `Promise`).

### **Exemplo**

```js
function gerarTempoAleatorio(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperar(mensagem) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mensagem);
    }, gerarTempoAleatorio(1, 3));
  });
}

esperar("Frase 1")
  .then(resposta => {
    console.log(resposta);
  })

// Frase 1
```

### **OBS**: é possível retornar uma nova `Promise` no `then()` e assim criar uma cadeia de `then()`

```js
function gerarTempoAleatorio(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperar(mensagem) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mensagem);
    }, gerarTempoAleatorio(1, 3));
  });
}

esperar("Frase 1")
  .then((resposta) => {
    console.log(resposta);
    return esperar("Frase 2");
  })
  .then((resposta) => {
    console.log(resposta);
    return esperar("Frase 3");
  })
  .then((resposta) => {
    console.log(resposta);
  })

// Frase 1
// Frase 2
// Frase 3
```

---

> ## Método `catch()`

### **Definição**

O método `catch()` só é executado quando uma promessa (`Promise`) for rejeitada (a função `reject()` for executada na `Promise`).

### **Exemplo**

```js
```