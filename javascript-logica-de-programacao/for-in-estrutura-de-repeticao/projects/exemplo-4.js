const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30
}

for (let chave in pessoa) {
  console.log(`${chave}:`, pessoa[chave]);
}