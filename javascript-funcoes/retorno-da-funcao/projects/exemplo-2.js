function criarPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const pessoa1 = criarPessoa("Luiz", "Otávio");
const pessoa2 = criarPessoa("joão", "Oliveira");

console.log(pessoa1);
console.log(pessoa2);