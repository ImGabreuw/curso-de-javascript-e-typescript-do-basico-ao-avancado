const nome = "Luiz";
const sobrenome = "Miranda";

const falarNome = () => {
  console.log(nome, sobrenome);
}

this.nome = nome;
this.sobrenome = sobrenome;
this.falarNome = falarNome;

console.log(module.exports);