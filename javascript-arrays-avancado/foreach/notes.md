# forEach

### **Definição**

Esse método exerce a mesma função da estrutura de repetição `for`, porém com um estilo funcional (*arrow function*).

> **IMPORTANTE**: o método `forEach` está disponíveis apenas em `array`

### **Sintaxe**

```js
.forEach(([valor atual], [indice atual], [array original]) => {
  // Código ... 
})
```

### **Exemplo**

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numeros.forEach(valor => console.log(valor));
```