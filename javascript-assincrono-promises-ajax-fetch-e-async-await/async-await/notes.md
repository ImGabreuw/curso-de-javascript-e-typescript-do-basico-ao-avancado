# Async / Await

> ## **`async`**

### **Definição**

Essa palavra reservada só pode ser utiliza em funções (antes do nome da função).

### **Sintaxe**

```js
async function [nome da função](...) {
  // ...
}
```

### **Exemplo**

```js
async function executar() {
  // ...
}
```

---

> ## **`await`**

### **Definição**

Essa palavra reservada só é permitido ser usada em função assíncronas (funções com `async`).

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

async function executar() {
  const fase1 = await esperar("Fase 1");
  console.log(fase1);

  const fase2 = await esperar("Fase 2");
  console.log(fase2);

  const fase3 = await esperar("Fase 3");
  console.log(fase3);
}

executar();

/* 
Fase 1
Fase 2
Fase 3
*/
```

### **Tratar `Promises` rejeitadas**

Utilizar `try-catch`:

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

async function executar() {
  try {
    const fase1 = await esperar("Fase 1");
    console.log(fase1);
  
    const fase2 = await esperar(2);
    console.log(fase2);
  
    const fase3 = await esperar("Fase 3");
    console.log(fase3);
  } catch (erro) {
    console.log(erro);
  }
}

executar();
```

---

> ## Os 3 estados de um `Promise`

### **`pending`**

Representação de uma promessa que ainda está sendo processada (pendente).

### **`fullfield`**

Representação de uma promessa processada (resolvida).

### **`rejected`**

Representação de um promessa que teve um erro ao longo do processamento (rejeitada).