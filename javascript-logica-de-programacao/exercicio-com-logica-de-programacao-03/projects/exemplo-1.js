const fizzBuzz = numero => {
  if (typeof numero !== "number") return `${numero} não é um número`;

  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";

  if (numero % 3 === 0) return "Fizz";

  if (numero % 5 === 0) return "Buzz";

  return numero;
}

console.log("a", fizzBuzz("a"));

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}