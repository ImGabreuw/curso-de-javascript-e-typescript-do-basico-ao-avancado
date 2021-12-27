function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

const pessoa = new Pessoa("Luiz", "Otávio");

console.log(Pessoa.prototype === pessoa.__proto__);