function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }

  return falaResto;
}

const olaMundo = falaFrase("Olá");

console.log(olaMundo);
console.log(olaMundo("mundo!"));