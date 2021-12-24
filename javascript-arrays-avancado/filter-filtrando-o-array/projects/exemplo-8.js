const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 }
]

const pessoasQueTerminalComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith("a"));

console.log(pessoasQueTerminalComA);