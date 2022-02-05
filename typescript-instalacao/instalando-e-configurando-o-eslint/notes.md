# Instalando e configurando o ESLint

> ## **ESLint e TypeScript**

1. Instalar os pacotes `@typescript-eslint/eslint-plugin` e `@typescript-eslint/parser` como dependência de desenvolvimento:

    ```shell
    $ npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
    ```

2. Configurar o ESLint a partir do arquivo `.eslintrc.js` (criá-lo no diretório raiz do projeto) :

    ```js
    module.exports = {
      env: {
        browser: true,
        es6: true,
        node: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
      globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 11,
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      rules: {},
    };
    ```
