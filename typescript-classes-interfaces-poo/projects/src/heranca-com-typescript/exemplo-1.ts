export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

export class Student extends Person {
  getFullName(): string {
    return `(Aluno) ${this.name} ${this.lastName}`;
  }
}

export class Costumer extends Person {
  getFullName(): string {
    return `(Cliente) ${this.name} ${this.lastName}`;
  }
}

const person = new Person('Luiz', 'Otávio', 30, '000.000.000-00');
console.log(person);
console.log(person.getFullName());

const student = new Student('Luiz', 'Otávio', 30, '000.000.000-00');
console.log(student);
console.log(student.getFullName());

const costumer = new Costumer('Luiz', 'Otávio', 30, '000.000.000-00');
console.log(costumer);
console.log(costumer.getFullName());
