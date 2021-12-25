function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
}

const pessoa = new Pessoa("Luiz", "Miranda");

console.log(pessoa);