export class Company {
  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const company = new Company('Udemy');
console.log(company);
console.log(company.name);
