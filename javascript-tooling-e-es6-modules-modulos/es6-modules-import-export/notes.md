# ES6 Modules - Import/Export

> ## **ES6 Modules**

### **Definição**

É o mecanismo do JavaScript para se trabalhar com múltiplos (importando e exportando).

---

> ## **`import`** 

### **Sintaxe**

```js
import { [variáveis...], [funções...] } from "[arquivo]"
```

> `[arquivo]` é necessário informar o **caminho relativo** do arquivo 

### **Exemplo**

```js
import { nome, sobrenome, idade, soma } from "./modulo1"

console.log(nome, sobrenome, idade, soma(10, 10));
```

### **Importar uma variável/função/classes com outro nome**

* **Sintaxe**:

  ```js
  import { [variável/função/classes] as [novo nome] } from "[arquivos]"
  ```

* **Exemplo**:

  ```js
  import { nome as luiz } from "./modulo1";

  const nome = "João";

  console.log(nome, luiz);
  ```

  ```js
  import { Pessoa as NovaPessoa } from "./modulo1";
  ```

### **Importar tudo de um arquivo**

* **Sintaxe**

  ```js
  import * as [apelido] from "[arquivo]"
  ```

* **Exemplo**

  ```js
  import * as MeuModulo from "./modulo1";

  console.log(MeuModulo.luiz); // Luiz
  console.log(MeuModulo.sobrenome); // Miranda
  console.log(MeuModulo.idade); // 30
  console.log(MeuModulo.soma(1, 2)); // 3
  ```

### **Importar uma variável/função/classe padrão do arquivo (`export default`)**

* **Sintaxe**

  ```js
  import [export padrão], { [variável/função/classe] } from "[arquivo]"
  ```

  > Quando for importar uma variável/função/classe padrão do arquivo, não se deve utilizar `{}`.

* **Exemplo**

  ```js
  // modulo1.js
  export const nome = "Luiz";

  export default (x, y) => x + y;

  // index.js
  import soma, { nome } from "./modulo1";

  console.log(soma(1, 2)); // 3
  console.log(nome); // Luiz
  ```

---

> ## **`export`**

### **Declarar uma variável/função/classes e depois exportá-la**

* **Sintaxe**

  ```js
  export { [variáveis...], [funções...], [classes...] }
  ```

* **Exemplo**

  ```js
  const nome = "Luiz";
  const sobrenome = "Miranda";
  const idade = 30;

  function soma(x, y) {
    return x + y;
  }

  export { nome, sobrenome, idade, soma };
  ```

### **Exportar uma variável/função/classes com outro nome**

* **Sintaxe**:

  ```js
  export { [variável/função/classes] as [novo nome] }
  ```

* **Exemplo**:

  ```js
  const nome = "Luiz";
  const sobrenome = "Miranda";
  const idade = 30;

  function soma(x, y) {
    return x + y;
  }

  export { nome as luiz, sobrenome, idade, soma };
  ```

### **Declarar e exportar uma variável/função/classes**

* **Sintaxe**

  ```js
  export [assinatura da variável/função/classe]
  ```

* **Exemplo**

  ```js
  export const sobrenome = "Miranda";
  ```

  ```js
  export function soma(x, y) {
    return x + y;
  }
  ```

  ```js
  export class Pessoa {
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
  }
  ```

### **`export default`**

* **Definição**: definir um `export` de uma variável/função/classe padrão do arquivo.

  > **OBS**: só é permitido ter 1 `export default` por arquivo

* **Exportar funções/classes**:

  * **Sintaxe**

    ```js
    export default [assinatura da função/classe]
    ```

  * **Exemplo**

    ```js
    export default function soma(x, y) {
      return x + y;
    }
    ```

    ```js
    export default class Pessoa {

    }
    ```

* **Exportar variáveis**:

  * **Sintaxe**

    ```js
    // declaração da variável

    export { [variável] as default }
    ```

  * **Exemplo**

    ```js
    const nome = "Luiz";
    const sobrenome = "Otávio";

    export { nome as default, sobrenome }
    ```