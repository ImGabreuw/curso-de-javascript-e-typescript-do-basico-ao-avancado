const nome1 = 'Luiz'; // String
const nome2 = "Luiz"; // String
const nome3 = `Luiz`; // String

const num1 = 10; // number
const num2 = 10.52; // number

let nomeAluno; // undefined
const sobrenomeAluno = null;

const toggle = false; 

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b) // 3, 2

const c = [1, 2];
const d = c;
console.log(c, d) // [ 1, 2 ] [ 1, 2 ]

c.push(3);
console.log(c, d) // [ 1, 2, 3 ] [ 1, 2, 3 ]