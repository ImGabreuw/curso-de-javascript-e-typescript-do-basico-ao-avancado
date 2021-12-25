# Revisando Objetos

> ## Declaração de objetos

### **Objetos literais**

* **Definição**: utilização das chaves (`{}`) para declarar um objeto.

* **Exemplo**:

  ```js
  const pessoa = {
    nome: "Luiz",
    sobrenome: "Otávio"
  };

  console.log(pessoas); // { nome: 'Luiz', sobrenome: 'Otávio' }
  ```

### **Método construtor da classe `Object`**

* **Definição**: utilização da palavra reservada `new` antes do nome da classe `Object`.

* **Exemplo**:

  ```js
  const pessoa = new Object();
  pessoa.nome = "Luiz";
  pessoa.sobrenome = "Otávio";

  console.log(pessoa); // { nome: 'Luiz', sobrenome: 'Otávio' }
  ```

---

> ## Remover um atributo de um objeto

### **Definição**

A remoção de um atributo de um objeto é feita a partir da palavra reservada `delete`.

### **Exemplo**

```js
const pessoa = {
  nome: "Luiz",
  sobrenome: "Otávio"
};

delete pessoa.nome;

console.log(pessoa); // { sobrenome: 'Otávio' }
```

```js
const pessoa = {
  nome: "Luiz",
  sobrenome: "Otávio"
};

delete pessoa["nome"];

console.log(pessoa); // { sobrenome: 'Otávio' }
```

---

> ## Acessar um atributo de um objeto

### **Notação de ponto (`.`)**

```js
const pessoas = {
  nome: "Luiz",
  sobrenome: "Otávio"
};

console.log(pessoas.nome); // Luiz
console.log(pessoas.sobrenome); // Otávio
```

### Colchetes (`[]`)

> **IMPORTANTE**: Colocar entre os colchetes o nome do atributo

```js
const pessoas = {
  nome: "Luiz",
  sobrenome: "Otávio"
};

console.log(pessoas["nome"]); // Luiz
console.log(pessoas["sobrenome"]); // Otávio
```

> **OBS**: esse modo de acessar um atributo é utilizado quando é necessário obter um campo de forma dinâmica.

```js
const pessoa = new Object();
pessoa.nome = "Luiz";
pessoa.sobrenome = "Otávio";
pessoa.idade = 30;

pessoa.falarNome = function() {
  return `${this.nome} está falando seu nome.`;
}
pessoa.getDataNascimento = function() {
  const dataAtual = new Date();

  return dataAtual.getFullYear() - this.idade;
}

for (let chave in pessoa) {
  console.log(pessoa[chave]);
}

/*
Luiz
Otávio
30
[Function (anonymous)]
[Function (anonymous)]
*/
```

---

> ## Métodos

### **Definição**

São funções de um objeto, e podem ser acessadas por meio da notação ponto (`.`).

> **OBS**: em um objeto, os seus atributos são visíveis para os seus métodos.

### **Exemplo**

```js
const pessoa = new Object();
pessoa.nome = "Luiz";
pessoa.sobrenome = "Otávio";
pessoa.idade = 30;

pessoa.falarNome = function() {
  return `${this.nome} está falando seu nome.`;
}
pessoa.getDataNascimento = function() {
  const dataAtual = new Date();

  return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa.falarNome()); // Luiz está falando seu nome.
console.log(pessoa.getDataNascimento()); // 1991
```

---

> ## Constructor function (Função construtora)

### **Definição**

A palavra reservada `new` cria um objeto vazio (`{}`) e atrela `this` a esse objeto.

As funções construtoras sempre começam com a primeira letra maiúscula (convenção).

Essa função não tem retorno explicito, pois o JavaScript já retorna automaticamente o objeto (`return this`).

### **Exemplo**

```js
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // return this; // this = { nome: "Luiz", sobrenome: "Miranda" }
}

const pessoa = new Pessoa("Luiz", "Miranda");

console.log(pessoa); // Pessoa { nome: 'Luiz', sobrenome: 'Miranda' }
```