type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };
type Person = HasName | HasLastName | HasAge;

const person: Person = {
  name: 'Luiz',
  // campo lastName não é obrigatório (comportamento não desejado)
  age: 30,
};

console.log(person);

export { HasName, HasLastName, HasAge, person };
