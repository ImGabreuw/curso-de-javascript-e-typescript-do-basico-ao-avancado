# Getters e Setters

> ## Getters e Setters em funções construtoras

### **Definição**

São métodos para simular uma função de um objeto em um atributo.

Além disso tem a função de proteger um atributo (validar o tipo do *input* do método setter, por exemplo).

### **Sintaxe**

* Método getter:

  ```js
  {
    // ...
    get: function() { 
      return [valor da propriedade] 
    },
    // ...
  }
  ```

* Método setter:

  ```js
  set: function([valor]) { 
    [atribuir esse valor à propriedade] 
  }
  ```

### **Exemplo**

* Método getter:

  ```js
  function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, "estoque", {
      enumerable: true,
      configurable: false,
      get: function() { return estoque }
    });
  }

  const produto = new Produto("Camiseta", 20, 3);

  console.log(produto); // Produto { nome: 'Camiseta', preco: 20, estoque: [Getter] }
  ```

* Método setter:

  ```js
  function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, "estoque", {
      enumerable: true,
      configurable: false,
      get: function() { return estoque },
      set: function(valor) { 
        if (typeof valor !== "number") {
          console.log("Valor inválido");
          return
        }

        estoque = valor;
      }
    });
  }

  const produto = new Produto("Camiseta", 20, 3);

  console.log(produto); // Produto { nome: 'Camiseta', preco: 20, estoque: [Getter/Setter] }
  ```

---

> ## Getters e Setters em *factory functions*

### **Exemplo**

```js
function criarProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    }
  }
}

const produto = criarProduto("Camiseta");

console.log(produto); // { nome: [Getter/Setter] }
```