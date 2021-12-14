const form = document.querySelector("#form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const inputPeso = event.target.querySelector("#peso")
  const inputAltura = event.target.querySelector("#altura")

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  
  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválido", false);
    return;
  }

  const imc = getImc(peso, altura);
  const levelImc = getLevelImc(imc);
  
  const message = `Seu IMC é ${imc} (${levelImc})`;

  setResultado(message, true);
})

function getLevelImc(imc) {
  const level = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];

  if (imc < 18.5) {
    return level[0];
  }

  if (imc >= 18.5 && imc < 25) {
    return level[1];
  } 
  
  if (imc >= 25 && imc < 30) {
    return level[2];
  } 
  
  if (imc >= 30 && imc < 35) {
    return level[3];
  } 
  
  if (imc >= 35 && imc < 40) {
    return level[4];
  } 

  return level[5];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;

  return imc.toFixed(2);
}

function criarP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(message, isValid) {
  const resultado = document.querySelector("#resultado");

  resultado.innerHTML = "";

  const p = criarP();

  if (isValid) {
    p.classList.add("sucesso-resultado");
  } else {
    p.classList.add("erro-resultado");
  }

  p.innerHTML = message;
  resultado.appendChild(p);
}