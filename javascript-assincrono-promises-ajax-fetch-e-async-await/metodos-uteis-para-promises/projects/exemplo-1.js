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

const promises = [
  "Primeiro valor",
  esperar("Promise 1"),
  esperar("Promise 2"),
  esperar("Promise 3"),
  "Segundo valor",
];

Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });
