const nome = "Luiz";

function falaNome() {
  console.log(nome);
}

function usarFalaNome() {
  const nome = "Otávio";
  falaNome();
}

usarFalaNome();