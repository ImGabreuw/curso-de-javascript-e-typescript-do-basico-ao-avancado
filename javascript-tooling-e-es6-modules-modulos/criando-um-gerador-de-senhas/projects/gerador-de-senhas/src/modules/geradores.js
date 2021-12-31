const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const gerarMaiuscula = () => String.fromCharCode(rand(75, 91));
const gerarMinuscula = () => String.fromCharCode(rand(97, 123));
const gerarNumero = () => String.fromCharCode(rand(48, 58));

const simbolos = ",.;'~^[]{}!@#$%&*()_-+=";
const gerarSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function gerarSenha(quantidade, maiuscula, minuscula, numeros, simbolos) {  
  const senhaArray = [];
  quantidade = Number(quantidade);

  for (let i = 0; i < quantidade; i++) {
    maiuscula && senhaArray.push(gerarMaiuscula());
    minuscula && senhaArray.push(gerarMinuscula());
    numeros && senhaArray.push(gerarNumero());
    simbolos && senhaArray.push(gerarSimbolo());
  }

  return senhaArray.join("").slice(0, quantidade);
}
