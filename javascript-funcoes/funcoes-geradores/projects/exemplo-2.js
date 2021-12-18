function* geradora1() {
  yield "Valor 1";

  yield "Valor 2";

  yield "Valor 3";
}

const g1 = geradora1();

for (let valor of g1) {
  console.log(valor);
}