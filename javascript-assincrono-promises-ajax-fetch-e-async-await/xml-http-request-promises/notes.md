# XMLHttpRequest (GET) + Promises

> ## **AJAX**

### **Definição**

**AJAX**: Asynchronous JavaScript and XML

`XMLHttpRequest` (xhr) é representação para AJAX

### **Exemplo**

```js
const request = (obj) => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.onload(() => {
    if (xhr.status >= 400) {
      obj.error(xhr.statusText);
      return;
    }

    obj.success(xhr.responseText);
  });
};
```

> A forma mais tradicional de se trabalhar com AJAX é utilizar *callback functions*.

```js
const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.onload(() => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
        return;
      }

      reject(xhr.statusText);
    });
  });
};

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregarPagina(el);
  }
});

async function carregarPagina(el) {
  const href = el.getAttribute("href");

  const objConfig = {
    method: "GET",
    url: href,
  };

  try {
    const response = await request(objConfig);
    carregarResultado(response);
  } catch (error) {
    console.log(error);
  }
}

function carregarResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
```

> O exemplo acima é a forma mais recomendada para se trabalhar com AJAX.