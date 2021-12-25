# Filter - Filtrando o array

### **Definição**

É um método para filtrar os elementos que não se adequam a um determinada condição (*predicate*), ou seja, a comparação retorna `false`, logo esse elemento é eliminado do novo `array`.

> **IMPORTANTE**: o método `filter()` recebe como argumento uma *callback function*

> **OBS**: o método `filter()` sempre retorna um `array` com o tamanho menor ou igual ao `array` original.

### **Exemplo**

```js
const numeros = [1, 40, 82, 93, 9, 4, 12, 29, 57, 63, 32];

const numerosFiltrado = numeros.filter(valor => valor > 10);

console.log(numerosFiltrado);

/*
[
  40, 82, 93, 12,
  29, 57, 63, 32
]
*/
```

```js
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 }
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);

console.log(pessoasComNomeGrande);

/*
[
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Wallace', idade: 47 }
]
*/
```