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

console.log(produto);