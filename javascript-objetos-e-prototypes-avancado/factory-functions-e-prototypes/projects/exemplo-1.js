function criarPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,

    falar() {
      console.log(`${this.nome} está falando.`)
    },

    comer() {
      console.log(`${this.nome} está comendo.`)
    },

    beber() {
      console.log(`${this.nome} está bebendo.`)
    },
  }
}

const pessoa = criarPessoa("Luiz", "Otávio");