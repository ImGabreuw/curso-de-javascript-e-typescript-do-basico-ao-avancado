const nomes = ["Luiz", "Otávio", "Henrique"];

nomes.forEach((valor, indice, array) => {
  console.log(`Índice ${indice}: ${valor}`, array)
})

nomes.forEach((valor, indice) => {
  console.log(`Índice ${indice}: ${valor}`)
})

nomes.forEach(valor => {
  console.log(valor)
})
