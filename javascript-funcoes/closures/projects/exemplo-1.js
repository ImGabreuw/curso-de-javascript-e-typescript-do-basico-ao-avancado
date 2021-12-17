function criarFuncao() {
  const nome = "Luiz";

  return function() {
    return nome;
  }
}

const funcao = criarFuncao();
console.dir(funcao);