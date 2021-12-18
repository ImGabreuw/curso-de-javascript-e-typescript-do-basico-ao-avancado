function Pessoa(nome, sobrenome) {
  const ID = 1234;

  const metodoInterno = function() {
    
  }

  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ": sou um método");
  }
}

const pessoa1 = new Pessoa("Luiz", "Otávio");
pessoa1.metodo();

console.log(pessoa1);