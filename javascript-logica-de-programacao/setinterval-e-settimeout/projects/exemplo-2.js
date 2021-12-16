function obterHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false
  });
}

function mostrarHora() {
  console.log(obterHora())
}

setInterval(function() {
  mostrarHora();
}, 1000);