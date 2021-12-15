# Atribuição via desestruturação (Arrays)

> ## Sintaxe

```js
[tipo da variável] [elementos a serem extraídos] = [array]
```

> Todos os elementos extraídos serão declarados com o **tipo da variável** (`let` ou `const`) indicado antes da desestruturação

---

> ## Exemplo

### Forma tradicional

* **Em `array` simples**

  ```js
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const primeiroNumero = numeros[0];
  const segundoNumero = numeros[1];

  console.log(primeiroNumero, segundoNumero); // 1 2
  ```

* **Em `array` composto** (forma recomendada)


  ```js
  const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

  console.log(numeros[1][2]); // 6
  ```

### Desestruturação

* **Em `array` simples**

  ```js
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [primeiroNumero, segundoNumero] = numeros;

  console.log(primeiroNumero, segundoNumero); // 1 2
  ```

* **Em `array` composto** (alta complexidade, desnecessário)

  ```js
  const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

  const [, [, , seis]] = numeros;

  console.log(seis); // 6
  ```

### Pular valores

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [primeiroNumero, , terceiroNumero, , quintoNumero] = numeros;

console.log(primeiroNumero, terceiroNumero, quintoNumero);
```

---

> ## Operador resto (rest operator)

### Função

Obter o restos dos elementos que não foram extraídos para variáveis específicas na **desestruturação** e atribuí-las a uma variável

> Tem a mesma função do **operador spread**, porém são nomenclaturas específicas para cada contexto

### Exemplo

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [primeiroNumero, segundoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero); // 1 2
console.log(resto); // [ 3, 4, 5, 6, 7, 8, 9 ]
```