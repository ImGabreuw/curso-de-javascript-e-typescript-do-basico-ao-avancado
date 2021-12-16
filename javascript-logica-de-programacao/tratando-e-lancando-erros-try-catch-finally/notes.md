# Tratando e lançando erros (try, catch, finally)

> ## Bloco `finally`

### Definição

* Opcional

* Esse bloco é sempre executado (mesmo se ocorrer um erro)

### Caso de uso

Geralmente o bloco `finally` é utilizado para fechar conexão com o banco de dados ou também para fechar arquivos após sua utilização (boa prática)

---

> ## Sintaxe

```js
try {
  // Bloco para capturar um possível erro
} catch (err) {
  // Bloco para tratá-lo
} finally {
  // Bloco opcional
  // Bloco sempre é executado (mesmo se ocorrer um erro)
}
```

---

> ## OBS

### Aninhamento de bloco `try-catch`

É possível ter um bloco `try-catch` dentro do outro no JavaScript, porém não é visto como uma boa prática, pois isso indica que a função possui muitas responsabilidades

---

> ## Exemplo

```js
function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("É esperado uma instância de Date");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleDateString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
}

try {
  const data = retornaHora(new Date());
  // const hora = retornaHora(11);
  console.log(data)
} catch (err) {
  console.log(err);
} finally {
  console.log("Sempre é executado.")
}

/*
16/12/2021 10:57:52
Sempre é executado.
*/
```
