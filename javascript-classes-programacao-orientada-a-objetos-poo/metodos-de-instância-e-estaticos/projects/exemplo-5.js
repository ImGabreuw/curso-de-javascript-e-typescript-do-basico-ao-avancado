class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    this.bateria = 100;
  }

  aumentarVolume() {
    this.volume += 2;
    this.bateria -= 1;
  }

  diminuirVolume() {
    this.volume -= 2;
    this.bateria -= 1;
  }

  static trocarPilha(controle) {
    console.log("OK, vou trocar de pilha.")
    controle.bateria = 100;
  }
}

const controle = new ControleRemoto("LG");
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();

console.log(controle);

ControleRemoto.trocarPilha(controle);
console.log(controle);