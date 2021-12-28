function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if (this.saldo < valor) {
    this.verSaldo();

    return;
  }

  this.saldo -= valor;
}

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
}

Conta.prototype.verSaldo = function() {
  console.log(`
    AG. ${this.agencia} \n
    C/C ${this.conta} \n
    Saldo R$${this.saldo.toFixed(2)}
  `)
}

const conta = new Conta(11, 22, 10);

console.log(conta);