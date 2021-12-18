# Funções recursivas

### **Definição**

São função que se chamam.

> **IMPORTANTE**: sempre definir uma forma de escapar do loop de recursividade (caso contrário, o JavaScript lançará um erro "RangeError: Maximum call stack size exceeded").

### **Exemplo**

```js
function recursiva(max) {
  if (max >= 10) return;

  max++;
  console.log(max);

  recursiva(max);
}

recursiva(0);
```

```js
function recursiva(max) {
  // if (max >= 10) return;

  max++;
  console.log(max);

  recursiva(max);
}

recursiva(0);

// RangeError: Maximum call stack size exceeded
```