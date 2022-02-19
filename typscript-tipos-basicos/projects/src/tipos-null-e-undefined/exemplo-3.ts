export function squareOf(x: any) {
  if (typeof x === 'number') {
    return x + x;
  }

  return null;
}

const squareOfNumber = squareOf(2);

if (squareOfNumber === null) {
  console.log('Conta inválida.');
} else {
  console.log(squareOfNumber);
}

const squareOfString = squareOf('2');

if (squareOfString === null) {
  console.log('Conta inválida.');
} else {
  console.log(squareOfString);
}
