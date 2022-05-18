export class Person {
  constructor(
    private name: string,
    private lastName: string,
    private age: number,
    private cpf: string,
  ) {}

  getName(): string {
    return this.name;
  }

  getLastName(): string {
    return this.lastName;
  }

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf.replace(/\D/g, '');
  }

  setCpf(cpf: string): void {
    this.cpf = cpf;
  }
}

const person = new Person('Luiz', 'Otávio', 30, '000.000.000-00');
person.setCpf('000.000.000-11');
console.log(person.getCpf());
