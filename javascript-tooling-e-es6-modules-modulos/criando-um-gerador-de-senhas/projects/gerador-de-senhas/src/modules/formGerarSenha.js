import gerador from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const quantidadeCaracteres = document.querySelector(".quantidade-caracteres");
const chkMaiusculas = document.querySelector(".chk-maiusculas");
const chkMinusculas = document.querySelector(".chk-minusculas");
const chkNumeros = document.querySelector(".chk-numeros");
const chkSimbolos = document.querySelector(".chk-simbolos");
const gerarSenha = document.querySelector(".gerar-senha");

export default () => {
  gerarSenha.addEventListener("click", () => {
    senhaGerada.innerHTML = gerar();
  })
};

function gerar() {
  const senha = gerador(
    quantidadeCaracteres.value,
    chkMaiusculas.checked,
    chkMinusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked
  );

  return senha || "Nada selecionado."
}
