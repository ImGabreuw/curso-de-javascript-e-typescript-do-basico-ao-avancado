# Operadores de comparação

> ## Definição

Todo valor operador lógico retorna uma valor booleano (`true` ou `false`)

> ## Lista de operadores

### `>`

* Maior que

* Geralmente é utilizado em número (mais não apenas nele)

* **Exemplo**

  ```js
  console.log(10 > 5); // true
  ```

### `>=`

* Maior que ou igual a

* **Exemplo**

  ```js
  console.log(10 >= 5); // true
  console.log(10 >=10); // true
  ```

### `<`

* Menor que

* **Exemplo**

  ```js
  console.log(10 < 11); // true
  console.log(10 < 3); // false
  ```

### `<=`

* Menor que ou igual a

* **Exemplo**

  ```js
  console.log(3 <= 5); // true
  console.log(10 <= 10); // true
  ```

### `==`

* Igualdade (entre valores)

* **Exemplo**

  ```js
  console.log(10 == 10); // true
  console.log(10 == 12); // false
  ```

* **IMPORTANTE**: não é recomendável utilizá-lo, pois o JavaScript faz a conversão de tipo automaticamente, e isso pode gerar efeitos colaterais

  ```js
  console.log(10 == "10"); // true
  ```

### `===`

* Igualdade estrita (entre valores e tipos)

* **Exemplo**

  ```js
  console.log(10 === 10); // true
  console.log(10 === 12); // false
  console.log(10 === "10"); // false
  ```

### `!=`

* Diferença (entre valores)

* **Exemplo**

  ```js
  console.log(10 != 10); // false
  console.log(10 != 12); // true
  ```

* **IMPORTANTE**: não é recomendável utilizá-lo, pois o JavaScript faz a conversão de tipo automaticamente, e isso pode gerar efeitos colaterais

  ```js
  console.log(10 != "10"); // false
  ```

### `!==`

* Diferença estrito (entre valores e tipos)

* **Exemplo**

  ```js
  console.log(10 !== 10); // false
  console.log(10 !== 12); // true
  console.log(10 !== "10"); // true
  ```