const numeros = [1, 40, 82, 93, 9, 4, 12, 29, 57, 63, 32];

function callbackFilter(valor) {
  return valor > 10;
}

const numerosFiltrado = numeros.filter(callbackFilter);
console.log(numerosFiltrado);