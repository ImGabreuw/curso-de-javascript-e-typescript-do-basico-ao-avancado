# Intersection Types

> ## **Definição**

_Intersection types_ é a intersecção de tipo no TypeScript.

A definição de um _intersection types_ é feita a partir do operador `&` (lê-se "and" ou "e").

Essa prática é amplamente utilizada na **composição de interfaces**.

> ## **Exemplo**

```ts
type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };
type Person = HasName & HasLastName & HasAge;

const person: Person = {
  name: 'Luiz',
  lastName: 'Miranda',
  age: 30,
};

console.log(person);
// { name: 'Luiz', lastName: 'Miranda', age: 30 }
```
