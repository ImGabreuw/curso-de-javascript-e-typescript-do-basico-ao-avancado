function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.falar = "Olá";

const pessoa = new Pessoa("Luiz", "Otávio");

console.log(pessoa.falar);
console.dir(pessoa);