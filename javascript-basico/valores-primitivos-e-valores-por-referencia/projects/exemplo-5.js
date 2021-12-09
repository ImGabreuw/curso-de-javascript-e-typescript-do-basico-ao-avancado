const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Otávio"
};

const pessoa2 = {
  ...pessoa1,
  idade: 25
}

console.log(pessoa1);
console.log(pessoa2);