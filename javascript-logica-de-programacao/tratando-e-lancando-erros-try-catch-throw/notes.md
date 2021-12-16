# Tratando e lançando erros (try, catch, throw)

> ## Definição

* Estrutura para capturar e tratar de forma mais legível para o usuário final, os erros internos da aplicação

* Não é recomendável expor o stacktrace do erro para o usuário final (pode expor dados sensíveis da aplicação)

---

> ## Exemplo

```js
const soma = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw("x e y precisam ser números.");
  }

  return x + y;
}


try {
  console.log(soma(1, 2));
  console.log(soma("1", 2));
} catch (err) {
  console.error(err);
}

// 3
// x e y precisam ser números.
```

```js
const soma = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error("x e y precisam ser números.");
  }

  return x + y;
}


try {
  console.log(soma(1, 2));
  console.log(soma("1", 2));
} catch (err) {
  console.error(err);
}

/*
3
Error: x e y precisam ser números.
    at soma (/home/gabriel/Projects/curso-de-javascript-e-typescript-do-basico-ao-avancado/javascript-logica-de-programacao/tratando-e-lancando-erros-try-catch-throw/projects/exemplo-3.js:3:11)
    at Object.<anonymous> (/home/gabriel/Projects/curso-de-javascript-e-typescript-do-basico-ao-avancado/javascript-logica-de-programacao/tratando-e-lancando-erros-try-catch-throw/projects/exemplo-3.js:12:15)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
*/
```
