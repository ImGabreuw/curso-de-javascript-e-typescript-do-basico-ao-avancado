# Prototypes

### Definição

> JavaScript é baseado em *prototypes* (protótipos) para acessar propriedades e métodos de um objeto para outro, ou seja, é a forma da linguagem de trabalhar com POO.

*Prototypes* é um objeto, que é anexado automaticamente pelo JavaScript, nos objetos criados pela função construtora. No objeto `prototype` é armazenado os "moldes/modelos" para a replicar os métodos em todas as instâncias.

Todo objeto tem um referência interna para um protótipo (`[objeto/instâncias].__proto__`), que vem na propriedade `prototype` da função construtora (`[nome da função construtora].prototype`) utilizada para criá-lo.

### Exemplo

```js
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.falar = "Olá";

const pessoa = new Pessoa("Luiz", "Otávio");

console.log(pessoa.falar); // Olá

console.dir(pessoa);
/*
Pessoa {       
  nome: 'Luiz',
  sobrenome: 'Otávio',
}
*/
```

### prototype e __proto__

Possuem a função de exibir o objeto `prototype` de um objeto.

```js
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

const pessoa = new Pessoa("Luiz", "Otávio");

console.log(Pessoa.prototype === pessoa.__proto__); // true
```

### Hierarquia dos membros de um objeto

* **Definição**: ao acessar um membro de um objeto, primeiro o motor do JavaScript tenta encontrar este membro no(a): **próprio objeto** -> cadeia de `prototype` -> ... -> `null` (topo da hierarquia)

* **Exemplo**

* Método do **objeto** sobrescrevendo o do **prototype**:

  ```js
  function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => `OBJETO ${this.nome} ${this.sobrenome}`;
  }

  Pessoa.prototype.nomeCompleto = () => `PROTOTYPE ${this.nome} ${this.sobrenome}`;

  const pessoa = new Pessoa("Luiz", "Otávio");

  console.log(pessoa.nomeCompleto()); // OBJETO Luiz Otávio
  ```

* Utilização do prototype (mais performático):

  ```js
  function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  Pessoa.prototype.nomeCompleto = function() {
    return `PROTOTYPE ${this.nome} ${this.sobrenome}`;
  }

  const pessoa = new Pessoa("Luiz", "Otávio");

  console.log(pessoa.nomeCompleto()); // PROTOTYPE Luiz Otávio
  ```

* Cadeia de prototypes:

  * Objeto Date:

    ```
    data (nome da instância de Date) -> Date.prototype -> Object.prototype
    ```

  * Objeto Pessoa

    ```js
      function Pessoa(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }

    Pessoa.prototype.nomeCompleto = function() {
      return `PROTOTYPE ${this.nome} ${this.sobrenome}`;
    }

    const pessoa = new Pessoa("Luiz", "Otávio");
    ```

    ```
    pessoa (nome da instância de Pessoa) -> Pessoa.prototype -> Object.prototype
    ```


  > **Conclusão**: `Object` é o "pai" de todos os objetos do JavaScript