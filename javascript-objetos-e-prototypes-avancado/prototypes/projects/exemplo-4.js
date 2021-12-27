function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
  return `PROTOTYPE ${this.nome} ${this.sobrenome}`;
}

const pessoa = new Pessoa("Luiz", "Otávio");

console.log(pessoa.nomeCompleto());