# For of - Estrutura de repetição

> ## Definição

* É uma estrutura de repetição específico para objetos iteráveis, ou seja, objetos que possuem índices (**Exemplo**: `string`, `array`)

* Invés de a variável do loop armazenar o índice, assim como no `for in`, no `for of` armazena o valor retorna

> ## Exemplo

### Forma tradicional

```js
const nome = "Luiz Otávio";

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}
```

```js
const nome = "Luiz Otávio";

for (let i in nome) {
  console.log(nome[i]);
}
```

### `For of`

```js
const nome = "Luiz Otávio";

for (let letra of nome) {
  console.log(letra);
}
```

```js
const nomes = ["Luiz", "Otávio", "Henrique"];

for (let nome of nomes) {
  console.log(nome);
}

/*
Luiz
Otávio
Henrique
*/
```

### `forEach`

```js
nomes.forEach((valor, indice, array) => {
  console.log(`Índice ${indice}: ${valor}`, array)
})

/*
Índice 0: Luiz [ 'Luiz', 'Otávio', 'Henrique' ]
Índice 1: Otávio [ 'Luiz', 'Otávio', 'Henrique' ]
Índice 2: Henrique [ 'Luiz', 'Otávio', 'Henrique' ]
*/
```

```js
const nomes = ["Luiz", "Otávio", "Henrique"];

nomes.forEach((valor, indice) => {
  console.log(`Índice ${indice}: ${valor}`)
})

/*
Índice 0: Luiz
Índice 1: Otávio
Índice 2: Henrique
*/
```

```js
nomes.forEach(valor => {
  console.log(valor)
})

/*
Luiz
Otávio
Henrique
*/
```