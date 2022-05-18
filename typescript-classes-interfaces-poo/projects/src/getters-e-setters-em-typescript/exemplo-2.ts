export class Person {
  constructor(
    private name: string,
    private lastName: string,
    private age: number,
    private _cpf: string,
  ) {}

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }
}

const person = new Person('Luiz', 'Otávio', 30, '000.000.000-00');
person.cpf = '000.000.000-11';
console.log(person.cpf);
