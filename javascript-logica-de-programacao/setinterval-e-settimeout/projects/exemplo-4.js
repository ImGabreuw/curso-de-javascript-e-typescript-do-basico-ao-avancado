function obterHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false
  });
}

function mostrarHora() {
  console.log(obterHora())
}

const timer = setInterval(
  () => mostrarHora(), 
  1000
);

setTimeout(() => clearTimeout(timer), 5 * 1000);