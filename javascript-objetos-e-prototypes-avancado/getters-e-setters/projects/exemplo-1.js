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

console.log(produto);