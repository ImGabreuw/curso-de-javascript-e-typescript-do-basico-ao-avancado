# Tipos null e undefined

> ## **`undefined`**

### **Definição**

Serve para indicar que uma propriedade (não) será definida.

### **Exemplo**

```ts
let x;

if (typeof x === 'undefined') {
  x = 20;
}

console.log(x * 2);
```

> ## **`null`**

### **Definição**

É a representação de um valor inexistente/"vazio".

### **Exemplo**

```ts
export function squareOf(x: any) {
  if (typeof x === 'number') {
    return x + x;
  }

  return null;
}

const squareOfNumber = squareOf(2);

if (squareOfNumber === null) {
  console.log('Conta inválida.');
} else {
  console.log(squareOfNumber);
}

const squareOfString = squareOf('2');

if (squareOfString === null) {
  console.log('Conta inválida.');
} else {
  console.log(squareOfString);
}

/*
4
Conta inválida.
*/
```
