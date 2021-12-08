# Objeto Math

## floor

### Função

Arredondar um `number` para baixo (*floor*)

### Exemplo

```js
let num1 = 9.54578;
let num2 = Math.floor(num1);

console.log(num2); // 9
```

---

## ceil

### Função

Arredondar um `number` para cima (`ceil`)

### Exemplo

```js
let num1 = 9.54578;
let num2 = Math.ceil(num1);

console.log(num2); // 10
```

---

## round

### Função

Arredondar um `number` para baixo se o `número < 5` ou para cima se o `número >= 5`

### Exemplo

```js
let num1 = 9.49;
let num2 = Math.round(num1);

console.log(num2); // 9
```

```js
let num1 = 9.50;
let num2 = Math.round(num1);

console.log(num2); // 10
```

---

## max

### Função

Obter o maior maior número em uma lista de números (`number`)

### Exemplo

```js
let maiorNumero = Math.max(1, 2, 3, 4, 5, -50, 100, 9, 8, 6);

console.log(maiorNumero); // 100
```

---

## random

### Função

Obter uma número aleatório entre `0` e `1`

> **OBS**: `1` não pertence ao intervalo de valores possíveis

### Exemplo

```js
let numeroAleatorio = Math.random();

console.log(numeroAleatorio); // 0.6329995167403006
```

### Retornar uma número aleatório dentro de um intervalo específico

* **Sintaxe**

  ```js
  Math.random() * ([valor máximo] - [valor mínimo]) + [valor mínimo];
  ```

* **Exemplo**

  ```js
  let numeroAleatorio = Math.random() * (10 - 5) + 5; // número aleatório entre "5" e "10"

  console.log(numeroAleatorio);
  ```

---

## pow

### Função

Potenciação (tem a mesma função do operador `**`)

### Exemplo

```js
console.log(Math.pow(2, 10)); // 1024
```

**OU**

```js
console.log(2 ** 10); // 1024
```

---

## sqrt

### Função

Obter a raiz quadrada de um número

### Exemplo

```js
let num1 = 9;

console.log(Math.sqrt(num1)) // 3
```

**OU**

```js
let num1 = 9;

console.log(num1 ** (1 / 2)); // 3
console.log(num1 ** 0.5); // 3
```

---

### Infinity

### Função

Um número é `Infinity`, ou seja, tende oa infinito, quando o mesmo é um número muito grande

### Exemplo

```js
console.log(10 / 0); // Infinity
```

> **IMPORTANTE**: `Infinity` NÃO é um erro no JavaScript
