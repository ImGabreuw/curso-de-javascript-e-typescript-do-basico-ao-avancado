export class Collaborator {}

export class Company {
  public readonly name: string;
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}

const company = new Company('Udemy', '11.111.111/0001-11');

console.log(company);
console.log(company.name);
