# Objeto Date

> ## Definição

* Objeto do JavaScript para facilitar a manipulação de datas

* As datas são calculadas, em milissegundos, a partir do marco "zero" da **Época Unix** (1º de Janeiro de 1970)

  > **Época unix** ou **Timestamp unix** = 1º de Janeiro de 1970

> ## Exemplo

### Criar uma data com o horário atual

```js
const data = new Date();

console.log(data.toString()); // Tue Dec 14 2021 12:58:54 GMT-0300 (Horário Padrão de Brasília)
```

###  Timestamp unix

```js
const data = new Date(0);

console.log(data.toString()); // Wed Dec 31 1969 21:00:00 GMT-0300 (Horário Padrão de Brasília)
```

> **OBS**: devido ao *time zone* (GMT -3), `new Date(0)` não marcou o dia 1º de Janeiro de 1970

```js
const tresHora = 3 * 60 * 60 * 1000;
const data = new Date(0 + tresHora);

console.log(data.toString()); // Thu Jan 01 1970 00:00:00 GMT-0300 (Horário Padrão de Brasília)
```

### Criar uma data a partir de uma data específica

* Criar a partir de números (menos comum)

  ```js
  new Date(
    [ano],
    [mês],
    [dia],
    [hora],
    [minuto],
    [segundo],
    [milissegundo]
  );
  ```

  > **OBS**: a contação dos meses começa em 0 (**Exemplo**: `Janeiro = 0` e `Dezembro = 11`)

  ```js
  const data = new Date(2019, 3, 20, 15, 14, 27);

  console.log(data.toString());
  ```

* Criar a partir de uma `string` (mais comum)

  > **IMPORTANTE**: essas `string` precisar entrar em conformidade com a `ISO8604` ou `IETF-compliant RFC 2822 timestamps`

  ```js
  new Date("[ano]-[mês]-[dia]T[hora]:[minuto]:[segundo].[milissegundo]");
  ```

  > **OBS**: nesse formato é necessário colocar o `0` em datas que são apenas de 1 dígito

  ```js
  const data = new Date("2019-04-20T20:20:59.100");

  console.log(data.toString());
  ```

### Obter cada elemento de uma data

```js
const data = new Date("2019-04-20T20:20:59.100");

console.log("Dia: ", data.getDate());
console.log("Mês: ", data.getMonth());
console.log("Ano: ", data.getFullYear());
console.log("Hora: ", data.getHours());
console.log("Min: ", data.getMinutes());
console.log("Seg: ", data.getSeconds());
console.log("Ms: ", data.getMilliseconds());
console.log("Dia da semana: ", data.getDay());
```

> **OBS**: a contação dos dias da semana começa em 0 (**Exemplo**: `Domingo = 0` e `Sábado = 6`)