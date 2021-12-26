const produto = { nome: "Caneca", preco: 1.8 };
const produtoCopia = { ...produto };

produto.nome = "Camiseta";
console.log(produto);

console.log(produtoCopia);