function gerarTempoAleatorio(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperar(mensagem) {
  return new Promise((resolve, reject) => {
    if (typeof mensagem !== "string") {
      reject("Valor inválido");
      return;
    }

    setTimeout(() => {
      resolve(mensagem);
    }, gerarTempoAleatorio(1, 3));
  });
}

function baixarPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.resolve("Página em cache");
  }

  return esperar("Página baixada");
}

baixarPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(erro => console.log(erro));