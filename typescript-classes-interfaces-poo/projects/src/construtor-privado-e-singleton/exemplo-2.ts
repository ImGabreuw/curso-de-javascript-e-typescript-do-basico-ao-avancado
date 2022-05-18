export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Connection: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (!Database.database) {
      console.log('Criando nova instâncias...');
      Database.database = new Database(host, user, password);
    }

    return Database.database;
  }
}

const db1 = Database.getDatabase('localhost', 'root', 'root');
db1.connect();

const db2 = Database.getDatabase('localhost', 'root', 'root');
db2.connect();

const db3 = Database.getDatabase('localhost', 'root', 'root');
db2.connect();

const db4 = Database.getDatabase('localhost', 'root', 'root');
db2.connect();
