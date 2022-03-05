# Type assertions

> ## **_Not-null assertion_**

### **Definição**

Afirmar que uma expressão retorna um valor não nulo, mesmo com o TypeScript avisando que pode retornar um valor nulo.

Usa-se o operador `!` após a expressão.

### **Exemplo**

```ts
const body = document.querySelector('body')!;
//                          ^
//                          |
// Returns the first element that is a descendant of node that matches selectors.

body.style.background = 'red';
```

> ## **_Type assertion_**

### **Definição**

Afirmar que uma expressão retorna um valor de um tipo específico, mesmo que o TypeScript avise sobre outros possíveis tipos.

Usa-se o operador `as` após a expressão.

### **Exemplo**

```ts
const body = document.querySelector('body') as HTMLBodyElement;
//                          ^
//                          |
// (method) ParentNode.querySelector<"body">(selectors: "body"): HTMLBodyElement | null

body.style.background = 'red';
```

```ts
const body = (document.querySelector('body') as unknown) as number;
```

> O Exemplo acima é utilizado apenas em casos muitos específicos, onde é necessário alterar o tipo para um outro que não é indicado na assinatura da função.
