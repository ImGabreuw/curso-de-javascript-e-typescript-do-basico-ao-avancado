const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;

while (i < numeros.length) {
  let numero = numeros[i];

  if (numero === 2) {
    console.log("2 pulado");
    continue;
  }

  console.log(numero);

  i++;
}