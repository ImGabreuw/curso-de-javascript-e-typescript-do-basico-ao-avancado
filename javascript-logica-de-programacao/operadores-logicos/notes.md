# Operadores Lógicos

> ## Função

* Checar mais de uma comparação

---

> ## Lista de operadores

### `&&`

*  And (e)

* `true`: todas as comparação precisar ser verdadeiras

* **Exemplo**

  ```js
  const tenhoDinheiro = true;
  const temSol = true;

  console.log(tenhoDinheiro && temSol); // true
  ```

  ```js
  const tenhoDinheiro = true;
  const temSol = false;

  console.log(tenhoDinheiro && temSol); // false
  ```

  ```js
  const usuario = "Luiz";
  const senha = "123456";

  const logado = usuario === "Luiz" && senha === "123456";

  console.log(logado); // true
  ```

### `||`

*  Or (ou)

* `true`: pelo menos 1 comparação precisa ser verdadeira

* **Exemplo**

  ```js
  const tenhoDinheiro = true;
  const temSol = true;

  console.log(tenhoDinheiro || temSol); // true
  ```

  ```js
  const tenhoDinheiro = true;
  const temSol = false;

  console.log(tenhoDinheiro || temSol); // true
  ```

  ```js
  const tenhoDinheiro = false;
  const temSol = false;

  console.log(tenhoDinheiro || temSol); // false
  ```

### `!`

*  Not (não, negação)

* **Exemplo**

  ```js
  console.log(!true); // false
  console.log(!false); // true
  ```
