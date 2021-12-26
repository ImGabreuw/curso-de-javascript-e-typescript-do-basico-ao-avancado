# Métodos úteis para objetos

> ## **Spread operator** em objetos

### Definição

Copiar as propriedades de uma objeto para outro.

### Exemplo

```js
const produto = { nome: "Caneca", preco: 1.8 };
const produtoCopia = { ...produto };

produto.nome = "Camiseta";
console.log(produto); // { nome: 'Camiseta', preco: 1.8 }

console.log(produtoCopia); // { nome: 'Caneca', preco: 1.8 }
```

```js
const produto = { nome: "Caneca", preco: 1.8 };
const produtoCopia = { ...produto, material: "porcelana" };

produto.nome = "Camiseta";
console.log(produto); // { nome: 'Camiseta', preco: 1.8 }

console.log(produtoCopia); // { nome: 'Caneca', preco: 1.8, material: 'porcelana' }
```

---

> ## Método `Object.assign()`

### Definição

Tem a mesma função do *spread operator*, porém é uma forma mais verbosa de copiar as propriedades de um objeto.

### Exemplo

```js
const produto = { nome: "Caneca", preco: 1.8 };
const produtoCopia = Object.assign({}, produto);

produto.nome = "Camiseta";
console.log(produto); // { nome: 'Camiseta', preco: 1.8 }

console.log(produtoCopia); // { nome: 'Caneca', preco: 1.8 }
```

```js
const produto = { nome: "Caneca", preco: 1.8 };
const produtoCopia = Object.assign({}, produto, { material: "porcelana" });

produto.nome = "Camiseta";
console.log(produto); // { nome: 'Camiseta', preco: 1.8 }

console.log(produtoCopia); // { nome: 'Caneca', preco: 1.8, material: 'porcelana' }
```

---

> ## Método `Object.getOwnPropertyDescriptor()`

### Definição

Obter as configurações de uma propriedade de um objeto.

### Sintaxe

```js
Object.getOwnPropertyDescriptor(
  [objeto],
  [nome de uma das propriedades desse objeto]
)
```

### Exemplo

```js
const produto = { nome: "Caneca", preco: 1.8 };

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

/*
{
  value: 'Caneca',  
  writable: true,   
  enumerable: true, 
  configurable: true
}
*/
```

```js
const produto = { nome: "Caneca", preco: 1.8 };

Object.defineProperty(produto, "nome", {
  writable: false,
  configurable: false
});

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

/*
{
  value: 'Caneca',   
  writable: false,   
  enumerable: true,  
  configurable: false
}
*/
```

---

> ## Método `Object.values()`

### Definição

Obter os valores das propriedades enumeráveis (`enumerable: true`).

### Exemplo

```js
const produto = { nome: "Caneca", preco: 1.8 };

console.log(Object.values(produto)); // [ 'Caneca', 1.8 ]
```

```js
const produto = { nome: "Caneca", preco: 1.8 };

Object.defineProperty(produto, "nome", {
  enumerable: false,
});

console.log(Object.values(produto)); // [ 1.8 ]
```

---

> ## Método `Object.entries()`

### Definição

Obter as chaves e os valores das propriedades enumeráveis (`enumerable: true`).

### Exemplo

```js
const produto = { nome: "Caneca", preco: 1.8 };

console.log(Object.entries(produto)); // [ [ 'nome', 'Caneca' ], [ 'preco', 1.8 ] ]
```

```js
const produto = { nome: "Caneca", preco: 1.8 };

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor)
}

/*
nome Caneca
preco 1.8
*/
```

```js
const produto = { nome: "Caneca", preco: 1.8 };

Object.defineProperty(produto, "nome", {
  enumerable: false
})

console.log(Object.entries(produto)); // [ [ 'preco', 1.8 ] ]
```
