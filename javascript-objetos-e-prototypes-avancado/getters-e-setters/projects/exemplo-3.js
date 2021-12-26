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

console.log(produto);