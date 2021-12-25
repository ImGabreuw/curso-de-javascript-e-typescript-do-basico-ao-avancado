function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const pessoa = new Pessoa("Luiz", "Miranda");

console.log(pessoa);