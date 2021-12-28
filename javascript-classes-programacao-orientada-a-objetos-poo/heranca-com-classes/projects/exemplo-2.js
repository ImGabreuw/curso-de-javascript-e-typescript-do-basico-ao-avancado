class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " já está ligado.");
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + " já está desligado.");
      return;
    }

    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {}

const smartphone = new Smartphone("Smartphone");
smartphone.ligar();
smartphone.ligar();
smartphone.desligar();
smartphone.desligar();

console.log(smartphone);
