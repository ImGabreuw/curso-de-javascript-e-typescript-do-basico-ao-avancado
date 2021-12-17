(function(idade, peso, altura) {
  const sobrenome = "Miranda";

  function criarNome(nome) {
    return nome + " " + sobrenome;
  }

  function falarNome() {
    console.log(criarNome("Luiz"));
  }

  falarNome();
  console.log(idade, peso, altura);
})(30, 80, 1.80);
