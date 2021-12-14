let escopo = "Escopo do bloco maior"

if (true) {
  let escopo = "Escopo do bloco intermediario"

  if (true) {
    let escopo = "Escopo do bloco menor"
    console.log(escopo);
  }
}