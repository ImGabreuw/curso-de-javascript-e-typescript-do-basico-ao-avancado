# Let vs Var - Primeira diferença

### Var

* É possível redeclarar variáveis `var`

  ```js
  var nome = "Luiz";
  var nome = "Otávio";

  console.log(nome); // Otávio
  ```

* Por padrão toda variável no JavaScript (se não for explicitamente declarada como `let` ou `const`), é definido como `var`

  ```js
  nome = "Luiz"; // <=> var nome = "Luiz";

  console.log(nome);
  ```

  > Esse tipo de declaração de variável não é uma boa prática, pois a variável `nome` foi declarada como uma **variável global** (de escopo global) e isso pode afetar outras variáveis no sistema

### OBS

* **ECMAScript**: é a padronização do JavaScript

* ECMAScript 2015 (ES6): conferência de padronização do JavaScript no ano de 2015