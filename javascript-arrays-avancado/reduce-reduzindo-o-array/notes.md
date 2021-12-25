# Reduce - Reduzindo o array

### **Definição**

É uma método para reduzir os valores de um `array` em um único valor. A junção desse elementos é feita por uma *callback function*.

**IMPORTANTE**: a partir do método `reduce()` é possível exercer a mesma função dos métodos `filter()` e `map()`, porém não é recomendado.

* Simulação do método `filter()`:

  ```js
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

  const total = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);

    return acumulador;
  }, []);

  console.log(total); // [ 50, 80, 2, 8, 22 ]
  ```

* Simulação do método `map()`:

  ```js
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

  const total = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);

    return acumulador;
  }, []);

  console.log(total);

  /*
  [
    10, 100, 160,  2,  4,  6,
    10,  16,  14, 22, 30, 44,
    54
  ]
  */
  ```

### **Sintaxe**

```js
.reduce((acumulador, valorAtual, indiceAtual, arrayOriginal) => {
  // Código ...

  return acumulador;
}, [valor inicial]);
```

> **OBS**: o parâmetro `[valor inicial]` é opcional, então se não especificado o JavaScript utiliza como valor inicial o **primeiro elemento do `array`**.

### **Exemplo**

```js
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0);

console.log(total); // 236
```

```js
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 }
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;

  return valor;
});

console.log(maisVelha); // { nome: 'Luiz', idade: 62 }
```