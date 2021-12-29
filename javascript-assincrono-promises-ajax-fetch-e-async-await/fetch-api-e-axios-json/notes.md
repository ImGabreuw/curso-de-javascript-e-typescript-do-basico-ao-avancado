# Fetch API e Axios (JSON)

> ## **Axios**

### **Definição**

É um *client HTTP*, assim como o *Fetch API*.

Apenas o método `axios()` retorna um `Promise`, diferentemente do *Fetch API* que todo método retorna uma `Promise` gerando um encadeamento de `then()`.

**IMPORTANTE**: antes do script JS que utiliza o Axios, é necessário colocá-lo na página HTML para ser carregado:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

### **Axios VS Fetch API**

* Fetch API:

  ```js
  fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementosNaPagina(json));
  ```

* Axios:

  ```js
  axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));
  ```