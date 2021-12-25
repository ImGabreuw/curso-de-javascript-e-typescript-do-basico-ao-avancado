const pessoa = new Object();
pessoa.nome = "Luiz";
pessoa.sobrenome = "Otávio";
pessoa.idade = 30;

pessoa.falarNome = function() {
  return `${this.nome} está falando seu nome.`;
}
pessoa.getDataNascimento = function() {
  const dataAtual = new Date();

  return dataAtual.getFullYear() - this.idade;
}

for (let chave in pessoa) {
  console.log(pessoa[chave]);
}