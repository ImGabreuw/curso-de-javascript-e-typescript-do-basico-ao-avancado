# Instalando o TypeScript

> ## **Instalação do TypeScript**

1. Instalar o pacote `typescript` com NPM:

    ```shell
    $ npm i typescript -D
    ```

> ## **Arquivos binários `tsc` e `tsserver`**

### **`tsserver`**

É um arquivo gerado automaticamente ao instalar o TypeScript no projeto.

O `tsserver` é responsável por realizar as validações do código em tempo real e utilizado pela IDE para realizar essas checagens.

### **`tsc`**

É um arquivo gerado automaticamente ao instalar o TypeScript no projeto.

O `tsc` tem a função de compilar o código fonte em TypeScript para JavaScript.

> ## **Rodar uma projeto TypeScript manualmente**

1. Compilar o código fonte:

    ```shell
    $ npx tsc [nome do arquivo]
    ```

    ```shell
    $ npx tsc index.ts
    ```

2. Executar o script JavaScript gerado pelo `tsc`:

    ```shell
    $ node [nome do arquivo]
    ```

    ```shell
    $ node index.js
    ```

> ## ***Script mode***

### **Definição**

Esse modo ṕe habilitado por padrão e pode gerar alguns erros indesejados, pois a IDE entende o arquivo `.ts` como o mesmo arquivo que o compilado pelo `tsc` (com a extensão `.js`).

```js
// index.ts
const name = "Luiz";
        ^
        |
    // Erro: Não é possível declarar novamente a variável de escopo de bloco 'name'

// index.js (gerado pelo "tsc")
const name = "Luiz";
```

### **Solução**

Utilizar o **module mode** por meio de exportar a variável/função. Dessa forma, o escopo é alterado de global para módulo:

```js
// index.ts
const name = "Luiz";

export default name;
```
