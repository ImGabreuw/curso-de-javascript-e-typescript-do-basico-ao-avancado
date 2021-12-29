# Fetch API (GET)

> ## **Método `fetch()`**

### **Definição**

O método `fetch()` já abstrai toda verbosidade da AJAX (`XMLHttpRequest`) em uma única chamada de método.

Esse método já retorna uma `Promise`.

### **Exemplo**

```js
fetch("pagina1.html")
  .then(resposta => {
    if (resposta.status !== 200) {
      throw new Error("ERRO!");
    }

    return resposta.text();
  })
  .then(html => console.log(html))
  .catch(err => console.error(err));
```