function somar(a, b, c) {
  const [ paramA, paramB, paramC, ...paramExcedentes ] = arguments;
  console.log("Parâmetros da função:", paramA, paramB, paramC);
  console.log("Parâmetros excedentes:", paramExcedentes);
}

somar(1, 2, 3, 4, 5, 6, 7, 8, 9);