# Tipo never

> ## **Definição**

É um type annotation do TypeScript para representar um que uma função nunca retorna nada.

Geralmente, quando uma função retorna `never`, é porque ele lança um erro ou trava a aplicação.

**IMPORTANTE**: `void` é diferente de `never`

> ## **Exemplo**

```ts
export function criarErro(): never {
  throw new Error('Erro');
}

criarErro();
```
