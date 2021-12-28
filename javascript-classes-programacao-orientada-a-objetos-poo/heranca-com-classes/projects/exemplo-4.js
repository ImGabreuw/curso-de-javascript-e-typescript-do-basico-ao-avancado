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

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);

    this.cor = cor;
    this.modelo = modelo;
  }
}

const smartphone = new Smartphone("Smartphone", "preto", "Galaxy S10");
smartphone.ligar();
smartphone.ligar();
smartphone.desligar();
smartphone.desligar();

console.log(smartphone);

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi = false) {
    super(nome);

    this.temWifi = temWifi;
  }

  ligar() {
    if (!this.temWifi) {
      console.log("É preciso ter WIFI para ligar " + this.nome);
      return;
    }

    if (this.ligado) {
      console.log(this.nome + " já está ligado.");
      return;
    }

    this.ligado = true;
  }
}

const tabletSemWifi = new Tablet("Table");
tabletSemWifi.ligar();
tabletSemWifi.desligar();

console.log(tabletSemWifi);

const tabletComWifi = new Tablet("Table", true);
tabletComWifi.ligar();
tabletComWifi.ligar();
tabletComWifi.desligar();
tabletComWifi.desligar();

console.log(tabletComWifi);