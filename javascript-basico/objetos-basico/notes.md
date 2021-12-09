# Objetos (Básico)

### Definição

* Para criar uma objeto, basta utilizar `{}`

* Um objeto pode ter vários atributos (características do objeto)

* Método: é o nome dado para a função de um objeto

  ```js
  const pessoa1 = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25,

    fala() {
      console.log(`A minha idade atual é ${this.idade} anos.`);
    },

    incrementaIdade() {
      this.idade++;
    }
  };

  pessoa1.fala(); // A minha idade atual é 25 anos.
  pessoa1.incrementaIdade();
  pessoa1.fala(); // A minha idade atual é 26 anos.
  ```

### Exemplo

```js
function criarPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  };
}

const pessoa = criarPessoa("Luiz", "Otávio", 25);
console.log(pessoa); // { nome: 'Luiz', sobrenome: 'Otávio', idade: 25 }
```

**OU**

```js
function criarPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade
  };
}

const pessoa = criarPessoa("Luiz", "Otávio", 25);
console.log(pessoa); // // { nome: 'Luiz', sobrenome: 'Otávio', idade: 25 }
```

--

## Spread operator

### Função

Copiar todos os atributos de um `object`, além de ter a possibilidade de adicionar mais atributos, nesse outro `object`

### Exemplo

```js
const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Otávio"
};

const pessoa2 = {
  ...pessoa1,
  idade: 25
}

console.log(pessoa1); // { nome: 'Luiz', sobrenome: 'Otávio' }
console.log(pessoa2); // { nome: 'Luiz', sobrenome: 'Otávio', idade: 25 }
```