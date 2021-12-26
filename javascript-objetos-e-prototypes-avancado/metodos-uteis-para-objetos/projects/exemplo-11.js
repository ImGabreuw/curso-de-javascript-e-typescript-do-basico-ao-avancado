const produto = { nome: "Caneca", preco: 1.8 };

Object.defineProperty(produto, "nome", {
  enumerable: false
})

console.log(Object.entries(produto));