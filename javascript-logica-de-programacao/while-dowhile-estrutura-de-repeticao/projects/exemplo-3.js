function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const min = 1;
const max = 50;
let randomNumber = random(min, max);

while(randomNumber !== 10) {
  randomNumber = random(min, max);
  console.log(randomNumber);
}