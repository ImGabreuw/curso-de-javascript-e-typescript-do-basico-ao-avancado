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

const camiseta = new Camiseta("Regata", 7.5, "Preta");

console.log(camiseta);