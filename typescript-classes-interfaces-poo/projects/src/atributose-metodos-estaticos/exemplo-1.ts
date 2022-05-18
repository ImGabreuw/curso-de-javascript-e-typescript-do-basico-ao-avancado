export class Person {
  static defaultAge = 0;
  static defaultCpf = '000.000.000-00';

  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}

  static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, Person.defaultAge, Person.defaultCpf);
  }
}

const person = Person.createPerson('Luiz', 'Miranda');
console.log(person);
