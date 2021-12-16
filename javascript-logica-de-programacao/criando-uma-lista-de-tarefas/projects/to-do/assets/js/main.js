const inputTarefa = document.querySelector(".input-nova-tarefa");
const btnTarefa = document.querySelector(".btn-add-tarefa");
const tarefas = document.querySelector(".tarefas");

function criarLi() {
  return document.createElement("li");
}

function criarTarefa(texto) {
  const li = criarLi();
  li.innerText = texto;
  
  tarefas.appendChild(li);

  limparInput();
  criarBotaoApagar(li);
  salvarTarefas();
}

function limparInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criarBotaoApagar(li) {
  li.innerText += "";

  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar esta tarefa");

  li.appendChild(botaoApagar);
}

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJson = JSON.stringify(listaDeTarefas);
  
  localStorage.setItem("tarefas", tarefasJson)
}

function adicionarTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criarTarefa(tarefa);
  }
}

adicionarTarefasSalvas();

inputTarefa.addEventListener(
  "keypress", 
  event => {
    if (event.keyCode === 13) {
      if (!inputTarefa.value) return;

      criarTarefa(inputTarefa.value);
    }
  }
)

btnTarefa.addEventListener("click", event => {
  if (!inputTarefa.value) return;

  criarTarefa(inputTarefa.value);
});

document.addEventListener("click", event => {
  const elemento = event.target;

  if (elemento.classList.contains("apagar")) {
    elemento.parentElement.remove();
    salvarTarefas();
  }
})