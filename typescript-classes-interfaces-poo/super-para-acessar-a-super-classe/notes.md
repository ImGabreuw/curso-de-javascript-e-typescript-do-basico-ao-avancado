# super - para acesso à super classe

> ## **Super classe**

### **Definição**

A **super classe** também pode ser chamada de _base class_ ou _parent class_.

A **super classe** é classe que é herdada por outra classe (**sub classe**).

A palavra reservada `super` tem a função de referenciar à **super classe**, ou seja, acessar os atributos e métodos dessa classe.

Para chamar o **construtor da super classe**, basta utilizar a notação `super()` e informar as propriedades da _base class_ como argumento.

### **Exemplo**

```ts
class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + " " + this.lastName;
  }
}

class Student extends Person {
  getFullName(): string {
    return "(Aluno)" + super.getFullName();
  }
}

class Costumer extends Person {
  getFullName(): string {
    return "(Cliente)" + super.getFullName();
  }
}
```

```ts
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
  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    public room: string,
  ) {
    super(name, lastName, age, cpf);
  }

  getFullName(): string {
    return '(Aluno)' + super.getFullName();
  }
}

export class Costumer extends Person {
  getFullName(): string {
    return '(Cliente)' + super.getFullName();
  }
}

const person = new Person('Luiz', 'Otávio', 30, '000.000.000-00');
console.log(person);
console.log(person.getFullName());

const student = new Student('Luiz', 'Otávio', 30, '000.000.000-00', '0001');
console.log(student);
console.log(student.getFullName());

const costumer = new Costumer('Luiz', 'Otávio', 30, '000.000.000-00');
console.log(costumer);
console.log(costumer.getFullName());
```
