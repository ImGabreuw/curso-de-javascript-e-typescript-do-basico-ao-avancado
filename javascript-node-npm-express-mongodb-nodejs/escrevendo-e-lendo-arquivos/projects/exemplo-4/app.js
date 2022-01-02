const path = require("path");
const escrever = require("./module/escrever");
const ler = require("./module/ler");

const caminho = path.resolve(__dirname, "teste.json");

const pessoas = [
  { nome: "João" },
  { nome: "Maria" },
  { nome: "Eduardo" },
  { nome: "Luiza" },
];

const json = JSON.stringify(pessoas, "", 2);

escrever(caminho, json);

async function lerArquivo(caminho) {
  const dados = await ler(caminho);
  renderizarDados(dados);
}

function renderizarDados(dados) {
  dados = JSON.parse(dados);

  dados.forEach((valor) => console.log(valor.nome));
}

lerArquivo(caminho);
