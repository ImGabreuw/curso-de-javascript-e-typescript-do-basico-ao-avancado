import GerarCPF from "./modules/gerar-cpf";

import './assets/css/style.css';

(function() {
  const gerarCpf = new GerarCPF();
  const cpfGerado = document.querySelector(".cpf-gerado");

  cpfGerado.innerHTML = gerarCpf.gerarNovoCPF();
})()