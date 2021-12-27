const objeto1 = {
  chaveA: "A"
}

const objeto2 = {
  chaveB: "B"
}

Object.setPrototypeOf(objeto2, objeto1);

console.log(objeto2.chaveA);
console.log(objeto2.__proto__);