# Revisão do básico em Arrays

> ## Array

### **Definição**

São valores por referência.

### **Copiar um array com `spread operador`**

```js
const nomes = ["Eduardo", "Maria", "Joana"];
const novo = [...nomes];

nomes.pop();

console.log(nomes); // [ 'Eduardo', 'Maria' ]
console.log(novo); // [ 'Eduardo', 'Maria', 'Joana' ]
```

### Métodos

* `pop()`: remover o último elemento do `array`

* `shift()`: remover o primeiro elemento do `array`

* `length()`: obter o tamanho do `array` (número de elementos)

* `push()`: adicionar um elemento no final do `array`

* `unshift()`: adicionar um elemento no começo do `array`

* `slice()`: "fatiar" um `array`

  > **OBS**: o parâmetro `end` do método não pertence ao intervalo a ser "fatiado"

  ```js
  const nomes = ["Eduardo", "Maria", "Joana", "Wallace", "Rosana"];
  const novo = nomes.slice(0, 3);
  console.log(novo); // [ 'Eduardo', 'Maria', 'Joana' ]
  ```

  ```js
  const nomes = ["Eduardo", "Maria", "Joana", "Wallace", "Rosana"];
  const novo = nomes.slice(0, -2);
  console.log(novo); // [ 'Eduardo', 'Maria', 'Joana' ]
  ```

* `split()`: separar uma `string` em um `array` a partir de um delimitador (argumento do método)

  ```js
  const nome = "Luiz  Otávio Miranda";
  const nomes = nome.split(" ");

  console.log(nomes); // [ 'Luiz', '', 'Otávio', 'Miranda' ]
  ```

  > No código acima, o delimitador passado no método é o **espaço**.

---

> ## Array literal

### **Definição**

Declarar um `array` a partir de colchetes (`[]`).

### **Exemplo**

```js
const nomes = ["Eduardo", "Maria", "Joana"];
```

---

> ## Array via construtor

### **Definição**

Declarar um `array` a partir do método construtor (utilizando a palavra reservada `new`).

### **Exemplo**

```js
const nomes = new Array("Eduardo", "Maria", "Joana");
```