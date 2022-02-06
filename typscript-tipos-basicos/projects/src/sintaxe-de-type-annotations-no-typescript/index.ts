/* eslint-disable */
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let numeroGrande: bigint = 10n;

let arrayOfNumberGeneric: Array<number> = [1, 2, 3];
let arrayOfNumber: number[] = [1, 2, 3];

let arrayOfStringsGeneric: Array<string> = ['a', 'b', 'c'];
let arrayOfStrings: string[] = ['a', 'b', 'c'];

let person: {name: string, age: number, adult?: boolean} = {
  name: 'Luiz',
  age: 30
}

function sum(x: number, y: number): number {
  return x + y;
}

const sumArrowFunction: (x: number, y: number) => number = (x, y) => x + y;

const result = sum(2, 2);
