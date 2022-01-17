# Componentes

> ## **Definição**

Um componente só pode retornar apenas 1 elemento HTML, dessa forma é muito utilizado uma `<div>...</div>` ou ***fragment*** (`<>...</>`) para envolver os elementos de um componente

**Stateless components (Componentes sem estado)**: são declarados como **funções**

**Stateful components (Componentes com estado)**: são declarados como **classes**

> ## **Sintaxe**

### Criar um componente

* Componente com apenas 1 elemento HTML:

  ```jsx
  export default function [nome do componente]() {
    return [tag HTML];
  }
  ```

  ```jsx
  export default function [nome do componente]() {
    return (
      [tag HTML]
    );
  }
  ```

* Componente com vários elementos HTML:

  ```jsx
  export default function [nome do componente]() {
    return (
      <div>
        [tag HTML]
        [tag HTML]
      </div>
    );
  }
  ```

  ```jsx
  export default function [nome do componente]() {
    return (
      <>
        [tag HTML]
        [tag HTML]
      </>
    );
  }
  ```

  > **IMPORTANTE**: a utilização do fragmente é a forma mais recomendada, pois isso não afeta a **hierarquia dos elementos HTML** (não há a inserção de uma <div> na hierarquia)

> ## **Stateful components (Componentes com estado)**

### **Definição**

Os componentes com estado possuem propriedades que geralmente são informados a partir de um parâmetro de uma função denominada `props` (convenção de nomenclatura).

Os estados de um componente é armazena em um objeto chamado `state`, e cada chave dele é considerado um estado do componente.

A alteração do estado de um componente é feito a partir do método `setState()` (herdado da classe `Component` do React), e recebe como argumento um objeto contendo a chave do estado a ser modificado.

> A cada vez que o estado é alterado, o método `render()` (herdado da classe `Component` do React) é invocado.

### **Criar um *stateful components* da forma tradicional**

```js
import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      novaTarefa: "",
    }

    this.inputMudou = this.inputMudou.bind(this);
  }

  inputMudou(e) {
    this.setState({
      novaTarefa: e.target.value,
    })
  }

  render() {
    const { novaTarefa } = this.state;

    return(
      <div className="main">
        <h1>{novaTarefa}</h1>

        <form action="#">
          <input onChange={this.inputMudou} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}
```

### **Criar um *stateful components* a partir de *class fields***

```js
import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    novaTarefa: "",
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    })
  }

  render() {
    const { novaTarefa } = this.state;

    return(
      <div className="main">
        <h1>{novaTarefa}</h1>

        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}
```

> É um boa prático iniciar o nome de uma função, que trata algum evento (`onChange`), com `handle...`. Por exemplo: `handleChange()`
