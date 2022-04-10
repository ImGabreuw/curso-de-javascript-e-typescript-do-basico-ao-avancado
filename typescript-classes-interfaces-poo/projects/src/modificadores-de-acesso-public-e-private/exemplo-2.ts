export class Collaborator {
  constructor(public readonly name: string, public readonly lastName: string) {}
}

export class Company {
  readonly name: string;
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  showCollaborators(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

const company = new Company('Udemy', '11.111.111/0001-11');

const collaborator1 = new Collaborator('Luiz', 'Otávio');
const collaborator2 = new Collaborator('Maria', 'Miranda');
const collaborator3 = new Collaborator('João', 'Vieira');

company.addCollaborator(collaborator1);
company.addCollaborator(collaborator2);
company.addCollaborator(collaborator3);

console.log(company);

company.showCollaborators();
