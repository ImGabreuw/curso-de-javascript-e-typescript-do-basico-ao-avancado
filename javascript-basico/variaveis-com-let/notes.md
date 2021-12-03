# Variáveis com let

### Função

* Armazenar um valor em memória e é possível alterá-lo durante a execução do programa

### Sintaxe

* Declarar uma variável sem inicializa-la

  ```js
  let <nome da variável>;
  ```

  > O valor padrão de uma variável (não inicializada) é `undefined`

* Declarar uma variável e inicializa-la com algum valor

  ```js
  let <nome da variável> = <valor>;
  ```

### OBS

* Não é possível declarar 2 (ou +) variáveis com nomes iguais em um mesmo escopo

### Regras de nomenclatura de variáveis

* Não utilizar variáveis com palavras reservadas (Exemplos: `let`, `if`)

* É recomendável declarar variáveis com nomes descritivos

* Não pode começar com números

  * **Exemplo**

    ```js
    let 1nome; // Erro
    ```

* Sempre começar com letra minúscula

* Não deve conter espaços e/ou traços

  * **Exemplo**

    ```js
    let nome-Cliente; // Error
    let nome Cliente; // Error
    ```

* Seguir o padrão **camelCase** para nomes de variáveis compostas

  * **Exemplo**

    ```js
    let nomeCliente;
    ```

* Case-sensitive

  * **Exemplo**

    ```js
    let nomeCliente = "Luiz";
    let nomecliente = "Otávio";
    ```

    > `nomeCliente` e `nomecliente` são variáveis diferentes

### Exemplos

```js
let nome;
console.log(nome); // undefined
```

```js
let nome = "João";

console.log(nome, "nasceu em 1984.");
console.log("Em 2000", nome, "conheceu Maria.");
console.log(nome, "casou-se com Maria em 2012.");
console.log("Maria teve 1 filho com", nome, "em 2015.");
console.log("O filho de", nome, "se chama Eduardo.");
```

```js
let nome; // declaração
nome = "João"; // inicialização
console.log(nome); // "João"
```

```js
let nome; // declaração
nome = "João"; // inicialização
console.log(nome); // "João"

let nome; // Erro
```