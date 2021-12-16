function conta(operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros);

  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "*") acumulador *= numero;
    if (operador === "/") acumulador /= numero;

  }

  console.log(acumulador);
}

conta("+", 0 , 20, 30 , 40, 50);
conta("-", 0 , 20, 30 , 40, 50);
conta("*", 0 , 20, 30 , 40, 50);
conta("/", 0 , 20, 30 , 40, 50);