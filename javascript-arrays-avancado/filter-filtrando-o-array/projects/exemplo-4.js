const numeros = [1, 40, 82, 93, 9, 4, 12, 29, 57, 63, 32];

const numerosFiltrado = numeros.filter(function(valor) {
  return valor > 10
});

console.log(numerosFiltrado);