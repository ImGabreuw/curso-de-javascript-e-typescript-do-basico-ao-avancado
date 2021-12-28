class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  static trocarPilha() {
    console.log("OK, vou trocar de pilha.")
  }
}

const controle = new ControleRemoto("LG");
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();

ControleRemoto.trocarPilha();

console.log(controle);