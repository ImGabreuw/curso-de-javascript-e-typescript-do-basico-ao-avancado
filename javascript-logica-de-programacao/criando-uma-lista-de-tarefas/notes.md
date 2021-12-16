# Criando uma Lista de tarefas

> ## Events

### `keypress`

* **Definiçã**: ação de pressionar uma tecla

* **Exemplo**

  ```js
  inputTarefa.addEventListener(
    "keypress", 
    event => {
      // Código ...
    }
  );
  ```

### `keyup`

* **Definiçã**: ação de soltar uma tecla

* **Exemplo**

  ```js
  inputTarefa.addEventListener(
    "keyup", 
    event => {
      // Código ...
    }
  );
  ```

### `keydown`

* **Definiçã**: ação de pressionar e segurar uma tecla

* **Exemplo**

  ```js
  inputTarefa.addEventListener(
    "keydown", 
    event => {
      // Código ...
    }
  );
  ```

---

> ## `focus()`

### Função

Definir um elemento como foco do cursor ("cursor piscando")

---

> ## localStorage

### Função

Armazenar dados (**chave-valor**) no navegador

> **OBS**: é possível salvar apenas `string` (**JSON**)

### `setItem`

* **Função**: salvar dados (`string`) no *Local Storage* do navegador

* **Sintaxe**

  ```js
  localStorage.setItem([chave], [valor]);
  ```

* **Exemplo**

  ```js
  localStorage.setItem("tarefas", tarefasJson);
  ```

### `getItem`

* **Função**: recuperar os dados salvos no *Local Storage* do navegador

* **Sintaxe**

  ```js
  localStorage.getItem([chave]);
  ```

* **Exemplo**

  ```js
  localStorage.getItem("tarefas");
  ```

### Visualizar o Local Storage do navegador

DevTools (F12) > aba `Application` > `Storage` > `Local Storage`
