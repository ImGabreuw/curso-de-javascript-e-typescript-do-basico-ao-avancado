# Constantes com const

### Função

* Armazenar um valor em memória e não é possível alterá-lo durante a execução do programa (são imutáveis)

### Sintaxe

* Declarar uma variável e inicializa-la com algum valor

  ```js
  const <nome da variável> = <valor>;
  ```

  > Não é possível apenas declarar uma `const`, é obrigatório inicializa-la

### OBS

* Não é possível declarar 2 (ou +) variáveis com nomes iguais em um mesmo escopo

* Não é possível reatribuir um valor a uma `const`

  ```js
  const nome = "João"
  nome = "Otávio" // Erro
  ```

### Regras de nomenclatura de variáveis

* Não utilizar variáveis com palavras reservadas (Exemplos: `const`, `let`, `if`)

* É recomendável declarar variáveis com nomes descritivos

* Não pode começar com números

  * **Exemplo**

    ```js
    const 1nome = "João"; // Erro
    ```

* Sempre começar com letra minúscula

* Não deve conter espaços e/ou traços

  * **Exemplo**

    ```js
    const nome-Cliente = "João"; // Error
    const nome Cliente = "João"; // Error
    ```

* Seguir o padrão **camelCase** para nomes de variáveis compostas

  * **Exemplo**

    ```js
    const nomeCliente = "João";
    ```

* Case-sensitive

  * **Exemplo**

    ```js
    const nomeCliente = "Luiz";
    const nomecliente = "Otávio";
    ```

    > `nomeCliente` e `nomecliente` são variáveis diferentes

### Exemplos

```js
const nome = "João"
```

```js
const numero = 5;

console.log(typeof numero); // number
console.log(typeof(numero)); // number
```

```js
const numero1 = 5;
const numero2 = 10;

console.log(typeof numero1 + numero2); // number10
console.log(typeof(numero1 + numero2)); // number
```