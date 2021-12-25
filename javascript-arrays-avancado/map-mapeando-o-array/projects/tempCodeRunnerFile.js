const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 }
];

const pessoasComIds = pessoas.map((obj, indice) => {
  obj.id = ++indice;
  return obj;
});

console.log(pessoas);
console.log(pessoasComIds);