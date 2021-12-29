function gerarTempoAleatorio(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperar(mensagem) {
  setTimeout(() => console.log(mensagem), gerarTempoAleatorio(1, 3));
}

esperar("Frase 1");
esperar("Frase 2");
esperar("Frase 3");