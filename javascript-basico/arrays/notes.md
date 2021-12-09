# Arrays (Básico)

### Definição

Cada elemento de uma `Array` possui um índice, sendo que o primeiro elemento sempre começa no índice 0

**OBS**: um `Array` pode ter vários tipo de dados diferentes

### Função

Armazenar uma lista de valores

### Exemplo

```js
const alunos = ["Luiz", "Maria", "João", 1, true, null];

console.log(alunos);
```

```js
const alunos = ["Luiz", "Maria", "João"];

console.log(alunos); // [ 'Luiz', 'Maria', 'João' ]

console.log(alunos[0]); // Luiz
console.log(alunos[alunos.length - 1]); // João

alunos[0] = "Eduardo";
console.log(alunos); // [ 'Eduardo', 'Maria', 'João' ]
```

---

## push

### Função

Adicionar um novo elemento no final do `Array`

### Exemplo

```js
const alunos = ["Luiz", "Maria", "João"];

alunos.push("Luiza");
console.log(alunos); // [ 'Luiz', 'Maria', 'João', 'Luiza' ]
```

**OU**

```js
const alunos = ["Luiz", "Maria", "João"];

alunos[alunos.length] = "Luiza";
console.log(alunos); // [ 'Luiz', 'Maria', 'João', 'Luiza' ]
```

---

## unshift

### Função

Adicionar um novo elemento no começo do `Array`

### Exemplo

```js
const alunos = ["Luiz", "Maria", "João"];

alunos.unshift("Luiza");
console.log(alunos); // [ 'Luiza', 'Luiz', 'Maria', 'João' ]
```

---

## pop

### Função

Obter e remover o último elemento do `Array`

### Exemplo

```js
const alunos = ["Luiz", "Maria", "João"];

const ultimoAluno = alunos.pop();
console.log(ultimoAluno); // João
console.log(alunos); // [ 'Luiz', 'Maria' ]
```

---

## shift

### Função

Obter e remover o primeiro elemento do `Array`

### Exemplo

```js
const alunos = ["Luiz", "Maria", "João"];

const ultimoAluno = alunos.shift();
console.log(ultimoAluno); // Luiz
console.log(alunos); // [ 'Maria', 'João' ]
```

---

## delete

### Função

"Remover" um elemento do `Array` a partir de um índice, porém esse elemento se torna um `undefined`

### Exemplo

```js
const alunos = ["Luiz", "Maria", "João"];

delete alunos[1];
console.log(alunos); // [ 'Luiz', <1 empty item>, 'João' ]
console.log(alunos[1]); // undefined
```

---

## slice

### Função

Obter apenas os elementos dentro de um intervalo específico em um `Array`

### Exemplo

```js
const alunos = ["Luiz", "Maria", "João", "Luiza", "Eduardo"];

console.log(alunos.slice(0, 3)); // [ 'Luiz', 'Maria', 'João' ]
console.log(alunos.slice(0, -2)); // [ 'Luiz', 'Maria', 'João' ]
```

---

## typeof

### Exemplo

```js
const alunos = ["Luiz", "Maria", "João", "Luiza", "Eduardo"];

console.log(typeof alunos); // object
```

---

## spread operator

### Função

Copiar todos os elementos de um `Array`, além de ter a possibilidade de adicionar mais elementos, nesse outro `Array`

### Exemplo

```js
let a = [1, 2, 3];
let b = [...a];

console.log(a, b); // [ 1, 2, 3 ] [ 1, 2, 3 ]
```

```js
let a = [1, 2, 3];
let b = [...a, 4, 5];

console.log(a, b); // [ 1, 2, 3 ] [ 1, 2, 3, 4, 5 ]
```