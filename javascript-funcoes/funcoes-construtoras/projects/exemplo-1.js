function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const pessoa1 = new Pessoa("Luiz", "Otávio");
const pessoa2 = new Pessoa("Maria", "Oliveira");

console.log(pessoa1);
console.log(pessoa2);