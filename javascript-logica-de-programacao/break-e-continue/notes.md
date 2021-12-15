# Break e Continue

> ## Definição

* É possível utilizar essas palavras chave em qualquer estrutura de repetição (`for`, `for in`, `for of`, `while`, `do-while`)

* `Break` tem a função de interromper (sair de) um laço

* `Continue` tem a finalidade de pular um elemento da iteração (não executa o trecho de código abaixo da palavra `continue`)

---

> ### Exemplo

### `continue`

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2) {
    console.log("2 pulado")
    continue;
  }

  console.log(numero);
}

/*
1
2 pulado
3
4
5
6
7
8
9
*/
```

### `break`

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if(numero === 7) {
    console.log("7 encontrado, saindo ...")
    break;
  }

  console.log(numero);
}

/*
1
2
3
4
5
6
7 encontrado, saindo ...
*/
```

---

> ## CUIDADO: loop infinito

### Com `continue`

* **Problema**

  ```js
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let i = 0;

  while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
      console.log("2 pulado");
      continue;
    }

    console.log(numero);

    i++; // Não é executado quando "numero = 2"
  }
  ```

* **Solução**

  ```js
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let i = 0;

  while (i < numeros.length) {
    let numero = numeros[i];

    i++;

    if (numero === 2) {
      console.log("2 pulado");
      continue;
    }

    console.log(numero);
  }
  ```
