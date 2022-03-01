type Age = number;

type ColorRGB = 'Vermelho' | 'Verde' | 'Azul';
type ColorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type FavoriteColor = ColorRGB | ColorCMYK;

type Person = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: FavoriteColor;
};

const person: Person = {
  name: 'Luiz',
  age: 30,
  salary: 200_000,
  favoriteColor: 'Vermelho',
};

console.log(person);

export { Age, ColorRGB, ColorCMYK, FavoriteColor, Person, person };
