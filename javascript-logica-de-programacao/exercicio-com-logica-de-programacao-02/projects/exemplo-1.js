function ehPaisagem(largura, altura) {
  return largura > altura ? true : false;
}

console.log(ehPaisagem(1920, 1080));
console.log(ehPaisagem(1080, 1920));