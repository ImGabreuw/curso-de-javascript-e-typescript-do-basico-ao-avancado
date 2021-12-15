function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const min = 1;
const max = 50;
let randomNumber = 10

do {
  randomNumber = random(min, max);
  console.log(randomNumber);
} while(randomNumber !== 10);