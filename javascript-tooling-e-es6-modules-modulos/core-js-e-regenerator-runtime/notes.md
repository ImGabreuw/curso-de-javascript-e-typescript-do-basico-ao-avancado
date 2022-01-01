# Core-js e regenerator-runtime

> ## **Problemas do webpack**

### **Erro: "regeneratorRuntime is not defined"**

Esse erro ocorre quando o *webpack* tenta transpilar um código com processos assíncronos (`Promises`, `async/await`), como no exemplo abaixo:

```js
function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hey, sou a promise.");
      resolve();
    }, 2000);
  });
}

export default async function () {
  await promise();
  console.log("Terminou");
}
```

### **Erro: "Promise is not defined"**

Esse erro ocorre quando o *webpack* tenta transpilar um código com processos assíncronos (`Promises`, `async/await`).

---

> ## **Regenerator-runtime**

### **Definição**

Essa biblioteca resolve o problema do *webpack*: "regeneratorRuntime is not defined"

### **Configuração**

Importar o arquivo *runtime* da biblioteca no arquivo de entrada da aplicação:

```js
import "regenerator-runtime/runtime";
```
---

> ## **Core-js**

### **Definição**

Essa biblioteca resolve o problema do *webpack*: "Promise is not defined"

### **Configuração**

Importar o diretório `stable` da biblioteca no arquivo de entrada da aplicação:

```js
import "core-js/stable";
```