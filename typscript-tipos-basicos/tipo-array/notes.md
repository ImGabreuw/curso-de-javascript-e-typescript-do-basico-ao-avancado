# Tipo array

> ## **Formas de criar um array**

### **Generic**

- **Sintaxe**:

  ```ts
  Array<T>
  ```

  > `T` representa o tipo do array

- **Exemplo**:

  ```ts
  function multiplicarArgs(...args: Array<number>) {
    return args.reduce((ac, valor) => ac * valor, 1);
  }

  console.log(multiplicarArgs(1, 2, 3));
  ```

### **Notação de array (`[]`)**

- **Sintaxe**:

  ```ts
  T[]
  ```

  > `T` representa o tipo do array

- **Exemplo**:

  ```ts
  function concatenarString(...args: string[]) {
    return args.reduce((ac, valor) => ac + valor);
  }

  console.log(concatenarString("Olá ", "Mundo"));
  ```
