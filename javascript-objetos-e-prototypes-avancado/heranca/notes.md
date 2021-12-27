# Herança

> ## **Herança**

### **Definição**

O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto. Assim como uma filha(o) pode herdar características da sua mãe/pai (geneticamente). Por isso é utilizado esse termo para descrever o comportamento desejado. Além disso, a maioria das literaturas, incluindo as documentações (como MDN) citam a palavra herança.

Javascript não é uma linguagem que apresenta essa característica em específico, portanto o termo mais adequado para descrever "herança" no JavaScript é **delegação**.

### **Exemplo**

```js
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
 
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
 
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
```

* No trecho:

  ```js
  Camiseta.prototype = Object.create(Produto.prototype);
  ```

  `Camiseta.prototype` é um novo objeto vazio que tem como protótipo `Produto.prototype`. Dessa forma, é adicionando `Camiseta.prototype` na cadeia de protótipos de `Produto`. Por consequência, tudo o que não existir em `Camiseta` nem em `Camiseta.prototype` (`__proto__`) será delegado para `Produto.prototype`, e assim por diante até chegar no topo da cadeia de protótipos. Por isso o termo **delegação** é o mais apropriado para este comportamento.
---

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