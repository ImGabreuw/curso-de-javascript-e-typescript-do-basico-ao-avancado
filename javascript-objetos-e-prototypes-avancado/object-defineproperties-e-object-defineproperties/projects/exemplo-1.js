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

  // Erro: Cannot redefine property: estoque
  // Object.defineProperty(this, "estoque", {
  //   enumerable: true,
  //   value: estoque,
  //   writable: false,
  //   configurable: false
  // });
}

const produto = new Produto("Camiseta", 20, 3);

console.log(produto);