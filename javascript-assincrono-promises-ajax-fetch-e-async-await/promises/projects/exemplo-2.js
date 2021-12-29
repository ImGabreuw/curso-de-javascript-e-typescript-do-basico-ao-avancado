function gerarTempoAleatorio(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperar(mensagem, callback) {
  setTimeout(() => {
    console.log(mensagem);

    if(callback) callback();
  }, gerarTempoAleatorio(1, 3));
}

esperar("Frase 1", function() {
  esperar("Frase 2", function() {
    esperar("Frase 3");
  });
});
