function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => `OBJETO ${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.nomeCompleto = () => `PROTOTYPE ${this.nome} ${this.sobrenome}`;

const pessoa = new Pessoa("Luiz", "Otávio");

console.log(pessoa.nomeCompleto());