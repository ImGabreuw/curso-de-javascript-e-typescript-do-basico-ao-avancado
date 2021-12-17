# Retorno da função

> ## `return`

### **Função**

Indicar o fim de um função.

### **Exemplo**

```js
function duplicar(n) {
  return n * 2;
}

function triplicar(n) {
  return n * 3;
}

function quadruplicar(n) {
  return n * 4;
}

console.log(duplicar(2));
console.log(triplicar(2));
console.log(quadruplicar(2));
```

* **Refatoração**

  ```js
  function criarMultiplicador(multiplicador) {
    return n => n * multiplicador;
  }

  const duplicar = criarMultiplicador(2);
  const triplicar = criarMultiplicador(3);
  const quadruplicar = criarMultiplicador(4)(2);

  console.log(duplicar); // [Function (anonymous)]
  console.log(triplicar(2)); // 6
  console.log(quadruplicar); // 8
  ```