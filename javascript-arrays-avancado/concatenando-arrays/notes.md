# Concatenando arrays

> ## Operador `+` em `array`

### **IMPORTANTE**

O operador `+` não concatena o `array` em si, mas sim os seus valores.

```js
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const juncao = a1 + a2;

console.log(juncao, typeof juncao); // 1,2,34,5,6 string
```

> ## Método ``concat()`

### **Exemplo**

```js
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const juncao = a1.concat(a2);

console.log(juncao); // [ 1, 2, 3, 4, 5, 6 ]
```

```js
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const juncao = a1.concat(a2, [7, 8, 9], "Luiz");

console.log(juncao);

/*
[
  1,      2, 3,
  4,      5, 6,
  7,      8, 9,
  'Luiz'
]
*/
```

> ## Spread operator (`...`)

### Exemplo

```js
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const juncao = [...a1, ...a2, 7, 8, 9];

console.log(juncao);

/* 
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/
```

```js
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const juncao = [...a1, ...a2, ...[7, 8, 9]];

console.log(juncao);

/* 
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/
```