export class Collaborator {
  constructor(public readonly name: string, public readonly lastName: string) {}
}

export class Company {
  readonly name: string;
  protected readonly collaborators: Collaborator[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  public addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  showCollaborators(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

export class Udemy extends Company {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popCollaborator(): Collaborator | null {
    const collaborator = this.collaborators.pop();

    return collaborator ? collaborator : null;
  }
}

const udemy = new Udemy();

const collaborator1 = new Collaborator('Luiz', 'Otávio');
const collaborator2 = new Collaborator('Maria', 'Miranda');
const collaborator3 = new Collaborator('João', 'Vieira');

udemy.addCollaborator(collaborator1);
udemy.addCollaborator(collaborator2);
udemy.addCollaborator(collaborator3);

const removedCollaborator = udemy.popCollaborator();

console.log(removedCollaborator);

console.log(udemy);

udemy.showCollaborators();
