# Praticando com factory functions

> ## `this`

### **Definição**

É uma palavra reservada para referenciar atributos e métodos de um objeto.

**OBS**: no JavaScript, o valor de `this` depende do contexto em que é utilizado.

### **Problema**

A palavra `this` não fazer referência ao objeto `Calculadora`.

```js
function criarCalculadora() {
  return {
    display: document.querySelector(".display"),

    iniciar() {
      this.cliqueBotoes();
    },

    cliqueBotoes() {
      document.addEventListener("click", function(e) {
        const el = e.target;

        console.log(this) // document

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    }
  }
}

const calculadora = criarCalculadora();
calculadora.iniciar();
```

### **Solução**

* Utilizar a função `bind()`:

  ```js
  function criarCalculadora() {
    return {
      display: document.querySelector(".display"),

      iniciar() {
        this.cliqueBotoes();
      },

      cliqueBotoes() {
        document.addEventListener("click", function(e) {
          const el = e.target;

          console.log(this);

          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay(el.innerText);
          }
        }.bind(this));
      },

      btnParaDisplay(valor) {
        this.display.value += valor;
      }
    }
  }

  const calculadora = criarCalculadora();
  calculadora.iniciar();
  ```

* Utilizar *arrow function*:

  ```js
  function criarCalculadora() {
    return {
      display: document.querySelector(".display"),

      iniciar() {
        this.cliqueBotoes();
      },

      cliqueBotoes() {
        document.addEventListener("click", e => {
          const el = e.target;

          console.log(this);

          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay(el.innerText);
          }
        });
      },

      btnParaDisplay(valor) {
        this.display.value += valor;
      }
    }
  }

  const calculadora = criarCalculadora();
  calculadora.iniciar();
  ```

---

> ## Método `eval()`

### **IMPORTANTE**

CUIDADO ao utilizar esse método

### **Definição**

Executar uma `string` como código JavaScript

### **Exemplo**

```js
eval("5+2*3/(10**2)");

// 5.06
```