# Mais diferenças entre var e let/const

> ## Escopo

### `var`

* Tem escopo de função

* **Exemplo**

  ```js
  var escopo = "Escopo do bloco maior" // declaração

  if (true) {
    var escopo = "Escopo do bloco intermediario" // redeclaração

    if (true) {
      var escopo = "Escopo do bloco menor" // redeclaração
      console.log(escopo); // Escopo do bloco menor
    }
  }
  ```

  > **OBS**: é possivel redeclarar `var` no JavaScript

  ```js
  var sobrenome = "Miranda";

  function falarOi() {
    var nome = "Luiz";
    console.log(nome, sobrenome); // Luiz Miranda
  }

  falarOi();
  console.log(nome); // Erro: "nome" is not defined
  ```

### `let` e `const`

* Tem escopo de bloco

* **Exemplo**

  ```js
  let escopo = "Escopo do bloco maior (escopo global)"

  if (true) {
    let escopo = "Escopo do bloco intermediario"

    if (true) {
      let escopo = "Escopo do bloco menor"
      console.log(escopo); // Escopo do bloco menor
    }
  }
  ```

  > O motor do JavaScript, com base no exemplo acima, ele utilizará a variável que pertença ao mesmo escopo aonde foi utilizado.

  ```js
  let escopo = "Escopo do bloco maior (escopo global)"

  if (true) {
    let escopo = "Escopo do bloco intermediario"

    if (true) {
      // let escopo = "Escopo do bloco menor"
      console.log(escopo); // Escopo do bloco intermediario
    }
  }
  ```

  > Caso não encontre essa variável no mesmo espoco da sua invocação, então o JavaScript a buscará até chegar ao **escopo global**. Se mesmo assim não a encontrar, será lançado um erro (`[nome da variável] is no defined`)

  ```js
  let escopo = "Escopo do bloco maior (escopo global)"

  if (true) {
    // let escopo = "Escopo do bloco intermediario"

    if (true) {
      // let escopo = "Escopo do bloco menor"
      console.log(escopo); // Escopo do bloco maior (escopo global)
    }
  }
  ```
