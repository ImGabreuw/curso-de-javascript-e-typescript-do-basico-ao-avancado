# Mais sobre numbers

## toString

* `toString()`

  * **Função**: converter um `number` em `string`

  * **Exemplo**

    ```js
    let num1 = 1;
    let num2 = 2.5;

    console.log(num1.toString() + num2); // 12.5
    ```

    > O operador `+`, no exemplo acima, exerce a função de concatenação de `string`s

* `toString(2)`

  * **Função**: representar uma `number` na forma de binário

  * **Exemplo**

    ```js
    let num1 = 1500;

    console.log(num1.toString(2)); // 10111011100
    ```

---

## toFixed

### Função

Arredondar um `number` para "X" (argumento do método) casas decimais

### Exemplo

```js
let num1 = 10.73648123;

console.log(num1.toFixed(2)); // 10.74
```

---

## isInteger

### Função

Verificar se um `number` é um inteiro

### Exemplo

```js
let num1 = 10.25;

console.log(Number.isInteger(num1)); // false
```

---

## isNaN

### Função

Verificar se um valor não é um número (*Not a Number*)

### Exemplo

```js
let num1 = 20.15;
let temp = num1 * "olá";

console.log(Number.isNaN(temp)); // true
```

```js
let num1 = 20.15;
let temp = num1 * "5";

console.log(Number.isNaN(temp)); // false
```

---

## IEEE 754-2008

### Função

Padrão de precisão para números flutuantes (`float`)

### Problema

```js
let num1 = 0.7;
let num2 = 0.1;

num1 += num2;
num1 += num2;
num1 += num2;

console.log(num1); // 0.9999999999999999
console.log(Number.isInteger(num1)); // false
```

### Solução

```js
let num1 = 0.7;
let num2 = 0.1;

num1 += num2;
num1 += num2;
num1 += num2;

num1 = parseFloat(num1.toFixed(2));
// OU
num1 = Number(num1.toFixed(2));

console.log(num1); // 1
console.log(Number.isInteger(num1)); // true
```

**OU**

```js
let num1 = 0.7;
let num2 = 0.3;

num1 = ((num1 * 100) + (num2 * 100)) / 100;

console.log(num1); // 1
console.log(Number.isInteger(num1)); // true
```