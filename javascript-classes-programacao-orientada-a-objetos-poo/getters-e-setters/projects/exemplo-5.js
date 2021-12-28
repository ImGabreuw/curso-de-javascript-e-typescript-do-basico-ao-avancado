class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }

  set nomeCompleto(nome) {
    const valor = nome.split(" ");

    this.nome = valor.shift();
    this.sobrenome = valor.join(" ");
  }
}

const pessoa = new Pessoa("Luiz", "Miranda");
console.log(pessoa);

pessoa.nomeCompleto = "Luiz Otávio Miranda";
console.log(pessoa);
