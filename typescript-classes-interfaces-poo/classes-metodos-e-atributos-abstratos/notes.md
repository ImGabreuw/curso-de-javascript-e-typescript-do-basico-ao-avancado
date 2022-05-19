# Classes, métodos e atributos abstratos

> ## **Definição**

As _subclasses_ possuem o **mesmo tipo** da _superclasse_.

As classes e membros abstratos (`abstract`) formam um **"contrato"** com as _subclasses_, ou seja, as classe que herdam dessa _superclasse_ devem implementar os membros abstratos dela.

Classe abstrata **não pode ser instanciada diretamente**, ou seja, só é possível instanciar as _subclasses_ (**classes concretas**) dela:

- Forma incorreta:

  ```ts
  abstract class Character {
    // ...
  }

  const character = new Character(...); // Erro de compilação
  ```

- Forma correta:

  ```ts
  abstract class Character {
    // ...
  }

  class Warrior extends Character {
    // ...
  }
  class Monster extends Character {
    // ...
  }

  const warrior = new Warrior(...);
  const monster = new Monster(...);
  ```

Método abstrato **não pode ter implementação (corpo)** na superclasse (abstrata):

- Forma incorreta:

  ```ts
  abstract class Character {
    abstract attackPhrase(): void {
      // Corpo -> erro de compilação
    }
  }
  ```

- Forma correta:

  ```ts
  abstract class Character {
    abstract attackPhrase(): void;
  }
  ```

> **OBS**: o **tipo de retorno** deve ser **definido explicitamente** em métodos abstratos
