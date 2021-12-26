const produto = { nome: "Caneca", preco: 1.8 };

Object.defineProperty(produto, "nome", {
  writable: false,
  configurable: false
});

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));