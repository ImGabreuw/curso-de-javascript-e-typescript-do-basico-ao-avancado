const produto = { nome: "Caneca", preco: 1.8 };
const produtoCopia = { ...produto, material: "porcelana" };

produto.nome = "Camiseta";
console.log(produto);

console.log(produtoCopia);