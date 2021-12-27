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

produto.desconto(50);
console.log(produto);

produto.aumento(100);
console.log(produto);