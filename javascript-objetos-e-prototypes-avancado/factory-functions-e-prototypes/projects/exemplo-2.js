function criarPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    falar() {
      console.log(`${this.nome} está falando.`);
    },

    comer() {
      console.log(`${this.nome} está comendo.`);
    },

    beber() {
      console.log(`${this.nome} está bebendo.`);
    }
  }

  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const pessoa = criarPessoa("Luiz", "Otávio");

console.log(pessoa);