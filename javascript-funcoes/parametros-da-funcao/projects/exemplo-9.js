function funcao({ nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade);
}

let pessoa = { nome: "Luiz", sobrenome: "Otávio", idade: 20 };

funcao(pessoa);