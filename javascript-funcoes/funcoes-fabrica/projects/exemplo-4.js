function criarPessoa(nome, sobrenome, altura, peso) {
  return { 
    nome, 
    sobrenome,
    altura,
    peso,

    falar(assunto) {
      return `${this.nome} está falando sobre ${assunto}`;
    },

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    get imc() {
      const imc = this.peso / (this.altura ** 2);

      return imc.toFixed(2);
    }
  }
}

const pessoa = criarPessoa("Luiz", "Otávio", 1.80, 80);

console.log(pessoa.falar("JS"));
console.log(pessoa.imc);
console.log(pessoa.nomeCompleto);