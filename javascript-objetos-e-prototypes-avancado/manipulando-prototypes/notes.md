# Manipulando Prototypes

> ## **OBS**

Na criação de um objeto literal (`{ ... }`), o motor do JavaScript utiliza a função construtora do `Object` para a criação desse objeto.

### Objeto literal

```js
const objeto = {
  chaveA: "A",
  chaveB: "B"
}
```

### Criação do objeto literal pelo motor do JavaScript

```js
const objeto = new Object();
objeto.chaveA = "A";
objeto.chaveB = "B";
```

---

> ## **Prototypes**

Toda função construtora tem um objeto `prototype` atrelado a ela (`Object.prototype`).

---

> ## **Método `Object.setPrototypeOf()`**

### Definição

Mudar o `prototype` de um objeto para outro ou para `null`.

### Exemplo

```js
const objeto1 = {
  chaveA: "A"
  // __proto__: Object.prototype
}

const objeto2 = {
  chaveB: "B"
  // __proto__: objeto1
}

Object.setPrototypeOf(objeto2, objeto1);

console.log(objeto2.chaveA); // A
console.log(objeto2.__proto__); // { chaveA: 'A' }
```

---

> ## **Método `Object.getPrototypeOf()`**

### Definição

Obter os atributos do objeto `__proto__`.

> **IMPORTANTE**: evitar o acesso direto de `__proto__` de um objeto (`[objeto].__proto__`).

### Exemplo

```js
const objeto1 = {
  chaveA: "A"
}

const objeto2 = {
  chaveB: "B"
}

Object.setPrototypeOf(objeto2, objeto1);

console.log(Object.getPrototypeOf(objeto2)); // { chaveA: 'A' }
```

---

> ## Declarar métodos dentro do prototype da função construtora

### Exemplo

```js
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

const produto = new Produto("Camiseta", 50);

produto.desconto(50);
console.log(produto); // Produto { nome: 'Camiseta', preco: 25 }

produto.aumento(100);
console.log(produto); // Produto { nome: 'Camiseta', preco: 50 }
```

---

> ## Definir um `prototype` em objeto literal

### OBS

Por padrão todo objeto literal tem o `prototype` `Object.prototype`, pois são criados a partir da função construtura `new Object()`.

### Exemplo

```js
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

const produto = {
  nome: "Caneca", 
  preco: 15 
}

Object.setPrototypeOf(produto, Produto.prototype);

produto.desconto(50);
console.log(produto); // Produto { nome: 'Caneca', preco: 7.5 }

produto.aumento(100);
console.log(produto); // Produto { nome: 'Caneca', preco: 15 }
```

---

> ## Método `Object.create()`

### Definição

Criar um objeto (e as configurações de cada propriedade) e já defini-lo com um `prototype` específico.

> A declaração das propriedade do objeto é opcional.

  ```js
  const objeto = Object.create(Date.prototype);

  console.log(objeto); // Date {}
  ```

### Exemplo

```js
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

const produto = Object.create(Produto.prototype, {
  nome: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "Caneta"
  },
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 2.5
  }
});

produto.desconto(50); // Produto { nome: 'Caneta', preco: 1.25 }
console.log(produto);

produto.aumento(100);
console.log(produto); // Produto { nome: 'Caneta', preco: 2.5 }
```