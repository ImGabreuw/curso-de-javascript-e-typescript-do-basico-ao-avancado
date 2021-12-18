function* geradoraInfinita() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const geradora = geradoraInfinita();

console.log(geradora.next().value);
console.log(geradora.next().value);
console.log(geradora.next().value);
console.log(geradora.next().value);