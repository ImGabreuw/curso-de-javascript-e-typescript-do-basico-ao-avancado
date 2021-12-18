function* geradoraDelegar() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora1() {
  yield* geradoraDelegar();
  yield 3;
  yield 4;
  yield 5;
}

const g1 = geradora1();

for (let valor of g1) {
  console.log(valor);
}