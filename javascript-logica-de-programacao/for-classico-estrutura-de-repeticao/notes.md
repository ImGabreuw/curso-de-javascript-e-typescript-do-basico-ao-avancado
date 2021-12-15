# For - Clássico - Estrutura de repetição

> ## Definição

* É a forma de declaração da estrutura de repetição `for` mais tradicional (quase todas as linguagens de programação possuem essa implementação)

* Possui 3 expressões

  > É separada com `;` (ponto e vírgula) no final de cada expressão

  * 1º) Declaração e atribuição do valor inicial da variável

  * 2º) Condição para limitar o loop

  * 3º) Incremento/Decremento da variável do laço `for`

---

> ## Sintaxe

```js
for (let [nome da variável] = [valor inicial]; [condição]; [incremento/decremento]) {
  // Código
}
```

> Geralmente é atribuído nome `i` (index) para a variável do laço `for`

---

> ## Exemplo

```js
for (let i = 0; i <= 5; i++) {
  console.log("Linha", i);
}

/*
Linha 0
Linha 1
Linha 2
Linha 3
Linha 4
Linha 5
*/
```

```js
for (let i = 0; i <= 50; i += 10) {
  console.log("Linha", i);
}

/*
Linha 0
Linha 10
Linha 20
Linha 30
Linha 40
Linha 50
*/
```

```js
for (let i = 10; i >= 0; i--) {
  console.log("Linha", i);
}

/*
Linha 10
Linha 9
Linha 8
Linha 7
Linha 6
Linha 5
Linha 4
Linha 3
Linha 2
Linha 1
Linha 0
*/
```

---

> ## Percorrer um `array`

```js
const frutas = ["maça", "pera", "uva"];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}: ${frutas[i]}`);
}

/*
Índice 0: maça
Índice 1: pera
Índice 2: uva
*/
```