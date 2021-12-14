var escopo = "Escopo do bloco maior" // declaração

if (true) {
  var escopo = "Escopo do bloco intermediario" // redeclaração

  if (true) {
    var escopo = "Escopo do bloco menor" // redeclaração
    console.log(escopo);
  }
}