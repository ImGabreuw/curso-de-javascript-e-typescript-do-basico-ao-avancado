function criarPessoa(nome, sobrenome, altura, peso) {
  return { 
    nome, 
    sobrenome,
    altura,
    peso,

    falar(assunto = "NADA") {
      return `${this.nome} está falando sobre ${assunto}`;
    },

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(" ");

      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
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

pessoa.nomeCompleto = "Maria Oliveira Silva";
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.falar());