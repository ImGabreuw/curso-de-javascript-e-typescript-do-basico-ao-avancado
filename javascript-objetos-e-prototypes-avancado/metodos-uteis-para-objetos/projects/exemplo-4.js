const produto = { nome: "Caneca", preco: 1.8 };
const produtoCopia = Object.assign({}, produto);

produto.nome = "Camiseta";
console.log(produto); // { nome: 'Camiseta', preco: 1.8 }

console.log(produtoCopia); // { nome: 'Caneca', preco: 1.8 }