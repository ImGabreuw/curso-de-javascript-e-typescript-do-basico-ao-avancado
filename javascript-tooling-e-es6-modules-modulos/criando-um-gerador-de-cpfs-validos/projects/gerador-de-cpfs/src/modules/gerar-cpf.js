import ValidarCPF from "./validador-de-cpf";

export default class GerarCPF {

  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  gerarNovoCPF() {
    const cpfSemDigito = this.rand();
    const digito1 = ValidarCPF.gerarDigito(cpfSemDigito);
    const digito2 = ValidarCPF.gerarDigito(cpfSemDigito + digito1);
    const novoCpf = cpfSemDigito + digito1 + digito2;

    return this.formatarCPF(novoCpf);
  }

  formatarCPF(cpf) {
    return (
      cpf.slice(0, 3) + "." +
      cpf.slice(3, 6) + "." +
      cpf.slice(6, 9) + "-" +
      cpf.slice(9, 11)
    );
  }

}