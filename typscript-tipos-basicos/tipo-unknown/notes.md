# Tipo unknown

> ## **Definição**

É a classe "pai" de todos os tipos do TypeScript.

Ao definir uma variável com esse tipo, é necessário verificar o seu tipo antes de utilizá-la.

> ## **Exemplo**

```ts
let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = 100;

const y = 800;

if (typeof x === 'number') console.log(x + y);
```
