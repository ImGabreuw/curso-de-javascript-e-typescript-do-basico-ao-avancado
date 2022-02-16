# Tipo tuple

> ## **Definição**

O tipo `tuple` é exclusivo do TypeScript.

Esse tipo é parecido com um array, porém nele é possível armazenar vários tipos de dados. Dessa forma, os métodos do array também funcionam na tupla.

> ## **Exemplo**

### **Sintaxe básica de uma tupla:**

```ts
const tuple: [number, string, string?] = [1, "Luiz", "Otávio"];

console.log(tuple); // [ 1, 'Luiz', 'Otávio' ]
```

### **Tupla imutável:**

```ts
const tuple: readonly [number, string] = [1, "Luiz"];

console.log(tuple); // [ 1, 'Luiz' ]
```

```ts
const tuple: ReadonlyArray<string> = ["Luiz", "Otávio"];

console.log(tuple); // [ 'Luiz', 'Otávio' ]
```
