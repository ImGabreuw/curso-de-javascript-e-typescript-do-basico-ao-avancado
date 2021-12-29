function gerarTempoAleatorio(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperar(mensagem) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mensagem);
    }, gerarTempoAleatorio(1, 3));
  });
}

esperar("Frase 1")
  .then((resposta) => {
    console.log(resposta);
    return esperar("Frase 2");
  })
  .then((resposta) => {
    console.log(resposta);
    return esperar("Frase 3");
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch();
