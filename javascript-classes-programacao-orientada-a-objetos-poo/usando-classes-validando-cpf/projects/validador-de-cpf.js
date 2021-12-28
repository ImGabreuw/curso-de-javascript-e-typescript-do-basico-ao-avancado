class ValidarCPF {
  constructor(cpfEnviado) {
    this.cpfEnviado = cpfEnviado;

    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  isSequencia() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
  }

  static gerarDigito(cpfSemDigitos) {
    let reverso = cpfSemDigitos.length + 1;
    const soma = Array.from(cpfSemDigitos).reduce((acumulador, valor) => {
      acumulador += reverso * Number(valor);
      reverso--;
  
      return acumulador;
    }, 0);
  
    let digito = 11 - (soma % 11);
  
    return digito > 9 ? "0" : String(digito);
  }

  gerarNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    
    const digito1 = ValidarCPF.gerarDigito(cpfSemDigitos);
    const digito2 = ValidarCPF.gerarDigito(cpfSemDigitos + digito1);
  
    const novoCpf = cpfSemDigitos + digito1 + digito2;
  }

  validar() {
    if (typeof this.cpfLimpo === "undefined") return false;
  
    if (this.cpfLimpo.length !== 11) return false;
  
    if (this.isSequencia()) return false;

    if (!this.gerarNovoCpf()) return false;
  
    return gerarNovoCpf() === this.cpfLimpo;
  }


  printBonito() {
    return this.validar() ? "CPF válido" : "CPF inválido";
  }

}

let cpf = new ValidarCPF("705.484.450-52");
console.log(cpf.cpfEnviado, cpf.printBonito());

cpf = new ValidarCPF("111.111.111-11");
console.log(cpf.cpfEnviado, cpf.printBonito());
