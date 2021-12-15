# While e Do While - Estrutura de repetição

> ## While

### Definição

É uma estrutura de repetição que executará uma trecho de código até satisfazer a condição imposta

### CUIDADO: **laço infinito**

Condição nunca é satisfeita, ou seja, a condição é **sempre verdadeira**. Geralmente isso ocorre quando a variável do loop **não é incrementada/decrementada**

```js
let i = 0;

while (i <= 10) {
  console.log(i);
  // i++;
}
```

### Exemplo

```js
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const min = 1;
const max = 50;
let randomNumber = random(min, max);

while(randomNumber !== 10) {
  randomNumber = random(min, max);
  console.log(randomNumber);
}
```

---

> ## Do-while

### Definição

Nessa estrutura de repetição, o trecho de código é executado pelo menos 1 vez, mesmo se a condição seja falsa

### Exemplo: diferença entre `while` e `do-while`

* `while`

  ```js
  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const min = 1;
  const max = 50;
  let randomNumber = 10;

  while(randomNumber !== 10) {
    randomNumber = random(min, max);
    console.log(randomNumber);
  }

  // O bloco while não será executado
  ```

* `do-while`

  ```js
  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const min = 1;
  const max = 50;
  let randomNumber = 10

  do {
    randomNumber = random(min, max);
    console.log(randomNumber);
  } while(randomNumber !== 10);

  /*
  14
  13
  4
  37
  48
  ... será executado até obter "randomNumber = 10"
  */
  ```
