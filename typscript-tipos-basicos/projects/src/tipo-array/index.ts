export function multiplicarArgs(...args: Array<number>) {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenarString(...args: string[]) {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(multiplicarArgs(1, 2, 3));
console.log(concatenarString('Olá ', 'Mundo'));
console.log(toUpperCase('Olá ', 'Mundo'));
