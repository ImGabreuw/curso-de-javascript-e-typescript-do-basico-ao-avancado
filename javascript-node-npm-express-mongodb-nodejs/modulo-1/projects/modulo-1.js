const nome = "Luiz";
const sobrenome = "Miranda";

const falarNome = () => {
  console.log(nome, sobrenome);
}

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falarNome = falarNome;

console.log(module.exports);