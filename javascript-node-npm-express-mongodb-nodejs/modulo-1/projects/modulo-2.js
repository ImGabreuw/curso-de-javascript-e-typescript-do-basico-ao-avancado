const nome = "Luiz";
const sobrenome = "Miranda";

const falarNome = () => {
  console.log(nome, sobrenome);
}

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falarNome = falarNome;

console.log(module.exports);