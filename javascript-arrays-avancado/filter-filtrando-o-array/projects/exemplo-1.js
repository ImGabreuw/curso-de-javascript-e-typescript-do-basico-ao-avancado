const numeros = [1, 40, 82, 93, 9, 4, 12, 29, 57, 63, 32];

function callbackFilter(valor, indice, array) {
  if (valor > 10) {
    return true;
  } else {
    return false;
  }
}

const numerosFiltrado = numeros.filter(callbackFilter);
console.log(numerosFiltrado);