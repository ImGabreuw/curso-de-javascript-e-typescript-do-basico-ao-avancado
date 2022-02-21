export enum Cores {
  VERMELHO = 10,
  AZUL = 20,
  AMARELO = 30,
  ROXO = 40,
  VERDE = 50,
}

function escolherCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolherCor(Cores.ROXO);
