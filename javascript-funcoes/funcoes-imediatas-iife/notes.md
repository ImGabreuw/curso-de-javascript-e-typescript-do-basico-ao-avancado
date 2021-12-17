# Funções imediatas (IIFE)

### **Definição**

IIFE (*Immediately Invoked Function Expression*) = Funções imediatas ou funções auto-invocáveis.

Evitar de variáveis e funções sejam declaradas no escopo global, pois isso pode gerar conflitos com bibliotecas externas.

Geralmente *IIFE* são funções anônimas.

### **Exemplo**

```js
(function() {
  const nome = "Luiz";
  console.log(nome); // Luiz
})();

const nome = "Otávio";
console.log(nome); // Otávio
```

> Sintaxe de *IIFE* herdada da biblioteca *JQuery*

```js
(function(idade, peso, altura) {
  const sobrenome = "Miranda";

  function criarNome(nome) {
    return nome + " " + sobrenome;
  }

  function falarNome() {
    console.log(criarNome("Luiz"));
  }

  falarNome();
  console.log(idade, peso, altura);
})(30, 80, 1.80);

/*
Luiz Miranda
30 80 1.8
*/
```