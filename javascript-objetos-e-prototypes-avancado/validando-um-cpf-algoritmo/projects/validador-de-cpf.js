function ValidarCPF(cpfEnviado) {
  this.cpfEnviado = cpfEnviado;

  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,

    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    }
  });
}


ValidarCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") return false;

  if (this.cpfLimpo.length !== 11) return false;

  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);

  const digito1 = this.criarDigito(cpfParcial);
  const digito2 = this.criarDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;

  return novoCpf === this.cpfLimpo;
}

ValidarCPF.prototype.criarDigito = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfParcial.length + 1;

  const soma = cpfArray.reduce((acumulador, valor) => {
    acumulador += regressivo * Number(valor);
    regressivo--;

    return acumulador;
  }, 0);

  let digito = 11 - (soma % 11);

  return digito > 9 ? "0" : String(digito);
}

ValidarCPF.prototype.isSequencia = function() {
  return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}

ValidarCPF.prototype.printBonito = function() {
  return this.valida() ? "CPF válido" : "CPF inválido";
}

let cpf = new ValidarCPF("705.484.450-52");
console.log(cpf.cpfEnviado, cpf.printBonito());

cpf = new ValidarCPF("111.111.111-11");
console.log(cpf.cpfEnviado, cpf.printBonito());