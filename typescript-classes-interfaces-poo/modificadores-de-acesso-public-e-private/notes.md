# Modificadores de acesso public e private

> ## **Modificadores de acesso `public`**

O modificador `public` pode ser utilizado em métodos e atributos, e com isso tornando-os acessíveis no escopo global.

`public` é o modificador de acesso padrão ao declarar um atributo ou métodos.

**IMPORTANTE**: a utilização do `public` (ou `private`) é obrigatório quando for definir os atributos de uma classes via construtor:

```ts
class Collaborator {
  constructor(
    public readonly name: string,
    public readonly lastName: string
  ) {}
}
```

> ## **Modificadores de acesso `private`**

O modificador `private` pode ser utilizado em métodos e atributos, e com isso tornando-os acessíveis apenas ao escopo (classe/arquivo) em que foi criado.

