# if, else if e else (1)

> ## Definição

* Estrutura condicional para desviar o fluxo de um programa

* O bloco `if` é executado caso a condição foi verdadeira (`true`)

* O bloco `else` é executado caso a condição for falsa (`false`)

---

> ## Exemplo

### `if`

```js
const hora = 11;

if (hora < 12) {
  console.log("Bom dia!");
}

// Bom dia!
```

```js
const hora = 11;

if (hora < 12) {
  console.log("Bom dia!");
}

// Não é impresso nada na tela
```

### `if-else`

```js
const idade = 18;

if (idade < 18) {
  console.log("Menor de idade");
} else {
  console.log("Maior de idade");
}

// Maior de idade
```

### `elif`

```js
const hora = 19;

if (hora >= 0 && hora < 12) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora < 18) {
  console.log("Boa tarde!")
} else if (hora >= 18 && hora <= 24) {
  console.log("Boa noite!")
} else {
  console.log("Olá!")
}

// Boa noite!
```

* No encadeamento de `if-else`, caso tenha mais de 1 condição verdadeira, será executada a primeira delas e as demais serão ignoradas

  ```js
  const nome = "Luiz";
  const idade = 17;
  const genero = "M";

  if (nome === "Gabriel") {
    console.log(nome);
  } else if (idade === 17) { // bloco executado
    console.log(idade);
  } else if (genero === "M") {
    console.log(genero);
  } else {
    console.log("Não entendi ...")
  }

  // 17
  ```