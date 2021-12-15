# Atribuição via desestruturação (Objetos)

> ## Sintaxe

```js
[tipo da variável] [campo a serem extraídos] = [objeto]
```

---

> ## Valores padrão

```js
const pessoa = {
  // nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320
  }
};

const { nome, sobrenome, idade } = pessoa;

console.log(nome, sobrenome, idade); // undefined Miranda 30
```

```js
const pessoa = {
  // nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320
  }
};

const { nome = "", sobrenome, idade } = pessoa;

console.log(nome, sobrenome, idade); // Miranda 30
```

---

> ## Atribuir nomes distintos dos campos de um objeto na desestruturação

### Sintaxe

```js
[tipo da variável] {[nome do campo do objeto]: [novo nome], ...} = [objeto]
```

### Exemplo

```js
const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320
  }
};

const { nome: teste, sobrenome, idade } = pessoa;

console.log(teste, sobrenome, idade); // Luiz Miranda 30
```

---

> ## Desestruturação em objetos encadeados

### Sintaxe

```js
[tipo da variável] { [nome do objeto encadeado]: { [nome do campo], ... }} = [objeto]
```

### Exemplo

```js
const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320
  }
};

const { endereco: { rua, numero} } = pessoa;

console.log(rua, numero); // Av Brasil 320
```

---

> ## Exemplo

### Forma tradicional

```js
const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320
  }
};

const nome = pessoa.nome;

console.log(nome); // Luiz
```

### Desestruturação

```js
const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320
  }
};

const { nome } = pessoa;

console.log(nome); // Luiz
```