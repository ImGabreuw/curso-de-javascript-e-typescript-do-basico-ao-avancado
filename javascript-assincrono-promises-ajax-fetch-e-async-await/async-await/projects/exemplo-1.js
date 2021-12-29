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

async function executar() {
  try {
    const fase1 = await esperar("Fase 1");
    console.log(fase1);
  
    const fase2 = await esperar(2);
    console.log(fase2);
  
    const fase3 = await esperar("Fase 3");
    console.log(fase3);
  } catch (erro) {
    console.log(erro);
  }
}

executar();