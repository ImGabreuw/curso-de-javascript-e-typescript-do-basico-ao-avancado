export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected damage: number,
    protected life: number,
  ) {}

  removeLife(damage: number): void {
    this.life -= damage;
    console.log(`${this.name} sofreu um dano de ${damage} pontos de vida...`);
  }

  abstract attackPhrase(): void;

  attack(target: Character): void {
    this.attackPhrase();
    target.removeLife(this.damage);
  }
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  attackPhrase(): void {
    console.log(`${this.emoji} Atacarrrr!`);
  }
}
export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  attackPhrase(): void {
    console.log(`${this.emoji} Krr Krr!`);
  }
}

const warrior = new Warrior('Guerreiro', 12, 100);
const monster = new Monster('Monstro', 9, 50);

warrior.attack(monster);
monster.attack(warrior);
