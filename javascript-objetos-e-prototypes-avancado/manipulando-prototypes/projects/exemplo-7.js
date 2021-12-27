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
console.log(produto);

produto.aumento(100);
console.log(produto);