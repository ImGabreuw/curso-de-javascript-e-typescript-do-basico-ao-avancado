const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 }
]

const pessoasComMaisDe50Anos = pessoas.filter(obj => obj.idade > 50);

console.log(pessoasComMaisDe50Anos);