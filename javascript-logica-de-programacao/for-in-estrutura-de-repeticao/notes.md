# For in - Estrutura de repetição

> ## Definição

É uma forma simplificada do `for` tradicional

---

> ## Exemplo

```js
const frutas = ["pera", "maçã", "uva"];

for (let index in frutas) {
  console.log(index);
}

/*
0
1
2
*/ 
```

* **OBS**: o `for in` itera o **índice em um array** ou a **chave (atributos) em um objeto**

  ```js
  const frutas = ["pera", "maçã", "uva"];

  for (let index in frutas) {
    console.log(frutas[index]);
  }

  /*
  pera
  maçã
  uva
  */
  ```

  ```js
  const pessoa = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 30
  }

  for (let chave in pessoa) {
    console.log(chave);
  }

  /*
  nome
  sobrenome
  idade
  */
  ```

---

> ## Acessar os atributos de um objeto de forma dinâmica

```js
const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30
}

for (let chave in pessoa) {
  console.log(pessoa[chave]);
}
```

> A sintaxe é parecido com a recuperação de um elemento a partir de um índice, porém no caso do objeto o índice se torna a **chave (nome do atributo)**