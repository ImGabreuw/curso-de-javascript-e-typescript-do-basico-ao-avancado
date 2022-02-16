# Tipo object (objetos em geral)

> ## **Formas de tipagem de um objeto**

### **`object`**

Não é recomendado definir explicitamente o tipo de um objeto com `object`:

```ts
const objetoA: object = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
```

### **Notação de objeto (`{}`)**

Não é recomendado definir explicitamente o tipo de um objeto com `{}`:

```ts
const objetoA: {} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
```

### **`Record`**

Ao utilizar o `Record` com o tipo `unknown`, desabilita o intellisense da IDE, uma vez que esse tipo está acima do tipo `any` na hierarquia.

```ts
const objetoA: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
```

### **_Index signature_**

```ts
const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string; // chave opcional
  [key: string]: unknown; // chave opcional
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Nova chave A';
objetoA.chaveC = 'Chave C';
objetoA.chaveD = 'Chave D';
```

> ## **`readonly`**

### **Definição**

A palavra reservada `readonly` tem a função de tornar o objeto imutável.

### **Exemplo**

```ts
const objetoA: {
  readonly chaveA: string;
} = {
  chaveA: 'Valor A',
};

objetoA.chaveA = 'Nova chave A'; // erro
```
