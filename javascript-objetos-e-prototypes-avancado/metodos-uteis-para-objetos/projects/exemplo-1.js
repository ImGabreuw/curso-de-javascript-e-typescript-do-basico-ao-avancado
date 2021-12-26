const produto = { nome: "Caneca", preco: 1.8 };
const outraCoisa = produto;

produto.nome = "Camiseta";

console.log(outraCoisa);