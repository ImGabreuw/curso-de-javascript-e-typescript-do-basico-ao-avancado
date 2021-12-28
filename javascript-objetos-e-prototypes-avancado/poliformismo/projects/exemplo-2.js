function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if (this.saldo < valor) {
    console.log("Saldo insuficiente");
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
}

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
}

Conta.prototype.verSaldo = function() {
  console.log(`
    AG. ${this.agencia}
    C/C ${this.conta}
    Saldo R$${this.saldo.toFixed(2)}
  `)
}

const conta = new Conta(11, 22, 10);
conta.depositar(10);
conta.sacar(30);

console.log(conta);