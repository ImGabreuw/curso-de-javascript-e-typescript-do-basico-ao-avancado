function criarMultiplicador(multiplicador) {
  return n => n * multiplicador;
}

const duplicar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);
const quadruplicar = criarMultiplicador(4)(2);

console.log(duplicar);
console.log(triplicar(2));
console.log(quadruplicar);