# Object.defineProperty() e Object.defineProperties()

> ## `Object.defineProperty()`

### **Definição**

Prevenir alterações de valores em apenas alguma propriedade de um objeto.

Esse método define apenas para 1 propriedade.

### **Sintaxe**

```js
Object.defineProperty(
  [objeto], 
  [nome da propriedade],
  [objeto de configuração]
)
```

Opções do objeto de configuração:

* `enumerable` (boolean): indicar se esta propriedade será exibido na enumeração das propriedades de um objeto (ao utilizar `console.log()` ou `Object.keys()`, por exemplo)

  > Valor padrão é `false`

  * `enumerable: true`

    ```js
    function Produto(nome, preco, estoque) {
      this.nome = nome;
      this.preco = preco;
      this.estoque = estoque;

      Object.defineProperty(this, "estoque", {
        enumerable: true,
        value: estoque
      })
    }

    const produto = new Produto("Camiseta", 20, 3);

    console.log(produto); // Produto { nome: 'Camiseta', preco: 20, estoque: 3 }
    ```

  * `enumerable: false`

    ```js
    function Produto(nome, preco, estoque) {
      this.nome = nome;
      this.preco = preco;
      this.estoque = estoque;

      Object.defineProperty(this, "estoque", {
        enumerable: false,
        value: estoque
      })
    }

    const produto = new Produto("Camiseta", 20, 3);

    console.log(produto); // Produto { nome: 'Camiseta', preco: 20 }
    ```

* `value` (any): indicar o valor da propriedade

  > Valor padrão é `undefined`

  ```js
  function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, "estoque", {
      enumerable: true,
      value: estoque,
    })
  }

  const produto = new Produto("Camiseta", 20, 3);

  console.log(produto); // Produto { nome: 'Camiseta', preco: 20 }
  ```

* `writable` (boolean): indicar se esta propriedade será imutável (`writable: false`) ou mutável (`writable: true`)

  > Valor padrão é `false`

  ```js
  function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, "estoque", {
      enumerable: true,
      value: estoque,
      writable: false
    })
  }

  const produto = new Produto("Camiseta", 20, 3);
  produto.estoque = 100;

  console.log(produto); // Produto { nome: 'Camiseta', preco: 20 }
  ```

* `configurable` (boolean): indicar se esta propriedade é configurável (permitir deletar ou reconfigurar a propriedade)

  > Valor padrão é `false`

  ```js
  function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, "estoque", {
      enumerable: true,
      value: estoque,
      writable: false,
      configurable: false // <--
    });

    // Erro
    Object.defineProperty(this, "estoque", {
      enumerable: true,
      value: estoque,
      writable: false,
      configurable: false
    });
  }

  const produto = new Produto("Camiseta", 20, 3);

  console.log(produto); // Cannot redefine property: estoque
  ```

### **Exemplo**

```js
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque,
    writable: false,
    configurable: false
  });
}

const produto = new Produto("Camiseta", 20, 3);

console.log(produto); // Produto { nome: 'Camiseta', preco: 20, estoque: 3 }
```

---

> ## `Object.defineProperties()`

### **Definição**

Prevenir alterações de valores em apenas alguma propriedade de um objeto.

Esse método define mais de uma propriedade.

### **Exemplo**

```js
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: false,
      configurable: false
    },
    estoque: {
      enumerable: true,
      value: estoque,
      writable: false,
      configurable: false
    }
  })
}

const produto = new Produto("Camiseta", 20, 3);

console.log(produto); // Produto { nome: 'Camiseta', preco: 20, estoque: 3 }
```

---

> ## `Object.keys()` e `for in`

### `Object.keys()`

```js
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque,
    writable: false,
    configurable: false
  });
}

const produto = new Produto("Camiseta", 20, 3);

console.log(Object.keys(produto)); // [ 'nome', 'preco', 'estoque' ]
```

### `for in`

```js
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    value: estoque,
    writable: false,
    configurable: false
  });
}

const produto = new Produto("Camiseta", 20, 3);

for (let chave in produto) {
  console.log(chave);
}

/*
nome
preco
estoque
*/
```