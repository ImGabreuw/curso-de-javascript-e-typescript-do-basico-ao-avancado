# Map - Mapeando o array

### **Definição**

É um método para transformar cada elemento de uma `array` a partir de uma *callback function*.

> **OBS**: o método `map()` sempre retorna um `array` com o mesmo tamanho do `array` original.

### **Exemplo**

```js
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numeroEmDobro = numeros.map(valor => valor * 2);

console.log(numeroEmDobro);

/*
[
  10, 100, 160,  2,  4,  6,
  10,  16,  14, 22, 30, 44,
  54
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
];

const nomes = pessoas.map(obj => obj.nome);

console.log(nomes);

// [ 'Luiz', 'Maria', 'Eduardo', 'Letícia', 'Rosana', 'Wallace' ]
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

const pessoasComIds = pessoas.map((obj, indice) => {
  obj.id = ++indice;
  return obj;
});

console.log(pessoas);
/*
[
  { nome: 'Luiz', idade: 62, id: 1 },   
  { nome: 'Maria', idade: 23, id: 2 },  
  { nome: 'Eduardo', idade: 55, id: 3 },
  { nome: 'Letícia', idade: 19, id: 4 },
  { nome: 'Rosana', idade: 32, id: 5 },
  { nome: 'Wallace', idade: 47, id: 6 }
]
*/

console.log(pessoasComIds);
/*
[
  { nome: 'Luiz', idade: 62, id: 1 },
  { nome: 'Maria', idade: 23, id: 2 },
  { nome: 'Eduardo', idade: 55, id: 3 },
  { nome: 'Letícia', idade: 19, id: 4 },
  { nome: 'Rosana', idade: 32, id: 5 },
  { nome: 'Wallace', idade: 47, id: 6 }
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
];

const pessoasComIds = pessoas.map((obj, indice) => {
  const newObj = { ...obj };
  newObj.id = ++indice;
  return newObj;
});

console.log(pessoas);
/*
[
  { nome: 'Luiz', idade: 62 },   
  { nome: 'Maria', idade: 23 },  
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]
*/

console.log(pessoasComIds);
/*
[
  { nome: 'Luiz', idade: 62, id: 1 },
  { nome: 'Maria', idade: 23, id: 2 },
  { nome: 'Eduardo', idade: 55, id: 3 },
  { nome: 'Letícia', idade: 19, id: 4 },
  { nome: 'Rosana', idade: 32, id: 5 },
  { nome: 'Wallace', idade: 47, id: 6 }
]
*/
```

### **OBS: retornar um objeto em uma *arrow function***

* Problema:

  ```js
  const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Wallace", idade: 47 }
  ];

  const idades = pessoas.map(obj => { idade: obj.idade }); // Erro

  console.log(idades);
  ```

* Solução: utilizar parênteses envolta do objeto

  ```js
  const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Wallace", idade: 47 }
  ];

  const idades = pessoas.map(obj => ({ idade: obj.idade }));

  console.log(idades);

  /*
  [
    { idade: 62 },
    { idade: 23 },
    { idade: 55 },
    { idade: 19 },
    { idade: 32 },
    { idade: 47 }
  ]
  */
  ```

