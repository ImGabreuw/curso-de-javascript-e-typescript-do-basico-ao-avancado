function criarPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade
  };
}

const pessoa = criarPessoa("Luiz", "Otávio", 25);

console.log(pessoa);