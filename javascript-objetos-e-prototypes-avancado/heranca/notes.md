# Herança

> ## **Definir a função construtora no `prototype` dela**

### **Sintaxe**

```js
[nome da função construtora].prototype.constructor = [referência da função construtora]
```

### **Exemplo**

```js
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
}

Produto.prototype = function (quantia) {
  this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
```

---

> ## **Herdar os membros de um objeto**

### **Sintaxe**

```js
[objeto pai].call(
  [função construtora do objeto filho (this)],
  [argumentos para essa função construtora]
)
```

### **Exemplo**

```js
```