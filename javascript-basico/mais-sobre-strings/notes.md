# Mais sobre strings

## Caractere escape (`\`)

### Função

Ignorar o caractere posposto à barra invertida (`\`)

### Sintaxe

* `\'`: citação única

* `\"`: citação dupla

* `\\`: barra invertida

* `\n`: nova linha

* `\b`: backspace (espaço)

* `\t`: TAB (espaçamento)

* `\f`: feed de formulário

* `\v`: guia vertical (o IE < 9 trata `\v` como `v` em vez de uma guia vertical (`\x0B`). Se a compatibilidade entre navegadores for uma preocupação, use `\x0B` em vez de `\v`.)

* `\0`: caractere nulo (U + 0000 NULL) (somente se o próximo caractere não for um dígito decimal; caso contrário, será uma sequência de **escape octal**)

### Exemplo

```js
let texto = "um \"texto\"";

console.log(texto); // um "texto"
```

> `\"` é muito utilizado para escrever um JSON em uma String

---

## Índices em uma String

### Definição

* A String é um Array de `Char` (caracteres), portanto cada caractere em uma String corresponde a um índice

* A contagem do índice sempre começa em 0

* **OBS**: o backspace (espaço) é considerado um caractere

### Exemplo

```js
             01234567
let texto = "um texto";

console.log(texto); // um texto
console.log(texto[4]); // t
console.log(texto[50]); // undefined
console.log(texto[-1]); // undefined
console.log(texto.charAt(6)); // x

console.log(texto.concat(" simples")); // um "texto" simples
console.log(texto + " simples"); // um "texto" simples
console.log(`${texto} simples`); // um "texto" simples
```

> O método `concat()` tem a mesma função do operador `+`

```js
let texto = "um texto";

console.log(texto.indexOf("um")); // 0
console.log(texto.indexOf("Um")); // -1
console.log(texto.indexOf("t", 5)); // 6
console.log(texto.indexOf("u", 3)); // -1
```

> `-1` representa que a `string` passada como argumento não existe na `string` armazenada na variável

```js
let texto = "um texto";

console.log(texto.lastIndexOf("o")); // 7
console.log(texto.lastIndexOf("o", 3)); // -1
```

## Busca de caracteres com Regex (expressão regular)

### match

* **Função**: retornar todos os caracteres que se encaixam na expressão regular passada como argumento no método `match()`

* **Exemplo**

  ```js
  let texto = "Um texto";

  console.log(texto.match(/[a-z]/g)); // [ 'm', 't', 'e', 'x', 't', 'o' ]
  ```

  > A expressão regular `/[a-z]/g` serve para buscar todos os caracteres em minúsculo

### search

* **Função**: retornar a posição do primeiro caractere que se encaixa na expressão regular passada como argumento no método `search()`

* **Exemplo**

  ```js
  let texto = "Um texto";

  console.log(texto.search(/[a-z]/)); // 1
  ```

### Replace

* **Função**: substituir uma `string` ou caractere por outra `string` ou caractere

* **OBS**: esse método aceita expressão regular ou `string`

* **Exemplo**

  ```js
  let texto = "Um texto";

  console.log(texto.replace("Um", "Outro")) // Outro texto
  console.log(texto.replace(/Um/, "Outro")) // Outro texto
  ```

  ```js
  let texto = "O rato roeu a roupa do rei de roma.";

  console.log(texto.replace(/r/, "#")); // O #ato roeu a roupa do rei de roma.
  console.log(texto.replace(/r/g, "#")); // O #ato #oeu a #oupa do #ei de #oma.
  ```

---

## length

### Função

Retornar o tamanho da `string` (número de caracteres de uma `string`)

### Exemplo

```js
let texto = "O rato roeu a roupa do rei de roma.";

console.log(texto.length); // 35
```

---

## slice

### Função

* Retornar uma trecho de uma `string`

* O método `substring()` tem a mesma função do `slice()`, porém ele não aceita valores negativos

### Exemplo

```js
//                    1111111
//           0123456789012345 
let texto = "Um texto simples";

console.log(texto.slice(3, 7)); // text
console.log(texto.slice(3, 8)); // texto
```

> **OBS**: o índice passado no parâmetro `end`, não pertence ao intervalo da `string` a ser cortado

```js
//                    1111111
//           0123456789012345 
let texto = "Um texto simples";

console.log(texto.slice(-7)); // simples
console.log(texto.slice(texto.length - 7)); // simples
```

```js
//                    11111111
//           01234567890123456 
let texto = "Um texto simples.";

console.log(texto.slice(-8, - 1)); // simples
console.log(texto.substring(texto.length - 8, texto.length - 1)); // simples
```

--- 

## split

### Função

Dividir uma `string` com base em uma caractere separador

### Exemplo

```js
let texto = "O rato roeu a roupa do rei de roma.";

console.log(texto.split(" "));
/*
[
  'O',     'rato',
  'roeu',  'a',
  'roupa', 'do',
  'rei',   'de',
  'roma.'
]
*/
```

```js
let texto = "O rato roeu a roupa do rei de roma.";

console.log(texto.split(" ", 3)); // [ 'O', 'rato', 'roeu' ]
```