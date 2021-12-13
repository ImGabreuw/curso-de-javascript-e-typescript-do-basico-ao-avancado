# Avaliação de Curto-Circuito (Short-Circuit)

> ## ***falsy values*** VS ***false* literal**

### *falsy values*

* São valores avaliados como `false` pelo JavaScript (fingem ser valores `false`)

* **Lista de *falsy values***

  * `0`

  * `''` (aspas simples), `""` (aspas duplas), `` (crase)

    > **IMPORTANTE**: só é avaliado em `false` caso a `string` esteja vazia (**Exemplo**: `"Olá"` = `true`)

  * `null`, `undefined`

  * `NaN`

  * **OBS**: os valores que não estão presentes nessa lista são avaliados como `true`

* Vantagem dos *falsy values* 

  Simplificação na lógica do programa (sem necessidade de se utilizar `if-else`)

  * Exemplo: forma tradicional

    ```js
    const corUsuario = null;
    let corPadrao;

    if (corUsuario === null) {
      corPadrao = "preto";
    } else {
      corPadrao = corUsuario;
    }

    console.log(corPadrao); // preto
    ```

    ```js
    const corUsuario = "vermelho";
    let corPadrao;

    if (corUsuario === null) {
      corPadrao = "preto";
    } else {
      corPadrao = corUsuario;
    }

    console.log(corPadrao); // vermelho
    ```

  * Exemplo: *falsy values*

    ```js
    let corUsuario = null;
    const corPadrao = corUsuario || "preto";

    console.log(corPadrao); // preto
    ```

    ```js
    let corUsuario = "vermelho";
    const corPadrao = corUsuario || "preto";

    console.log(corPadrao); // vermelho
    ```

### *false* literal

* O único *false* literal no JavaScript é o `false`

---

> ## *Short-Circuit*

```js
function falarOi() {
  return "Oi";
}

const executar = false;

executar && falarOi();
```

```js
function falarOi() {
  return "Oi";
}

const executar = false;

console.log(executar && falarOi()); // false
```

```js
function falarOi() {
  return "Oi";
}

const executar = true;

console.log(executar && falarOi()); // Oi
```

---

```js
console.log(0 || false || null || "Luiz Otávio" || true); // "Luiz Otávio"
console.log(0 || false || null || true || "Luiz Otávio"); // true
```

> `||`: é retornado o primeiro valor `true` da expressão

* **OBS**

  ```js
  console.log(0 || false || null || "false" || NaN); // "false" (string)
  ```

  > `"false"`: não é o valor literal, pois está entre aspas (tornando-se uma `string` não vazia), logo, o JavaScript o avalia como `true`

  ```js
  console.log(0 || false || null || false || NaN); // NaN
  ```

  > `||`: caso a expressão apresente apenas comparações falsas (`false`), então será retornado o último valor avaliado como `false` (no caso acima: `NaN`)