# Operação ternária

> ## Definição

* Tem a mesma função do `if-else`

* Simplificação do códigos em alguns blocos `if-else` 

> ## Exemplo

### Com `if-else`

```js
const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
  console.log("Usuário VIP");
} else {
  console.log("Usuário normal");
}

// "Usuário normal"
```

### Com operador ternário

```js
const pontuacaoUsuario = 1000;

const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";

console.log(nivelUsuario); // "Usuário VIP"

```