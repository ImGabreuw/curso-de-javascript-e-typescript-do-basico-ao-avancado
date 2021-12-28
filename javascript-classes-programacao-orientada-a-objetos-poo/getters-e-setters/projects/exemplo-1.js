class Carro {
  constructor(nome) {
    this.nome = nome;
    this.velocidade = 0;
  }

  acelerar() {
    if (this.velocidade >= 100) return;
    this.velocidade++;
  }

  freiar() {
    if (this.velocidade <= 0) return;
    this.velocidade--;
  }
}

const carro = new Carro("Fusca");

for (let i = 0; i < 200; i++) {
  carro.acelerar();
}

console.log(carro);