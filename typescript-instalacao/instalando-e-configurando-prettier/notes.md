# Instalando e configurando o Prettier

> ## **ESLint e Prettier**

1. Instalar os pacotes `prettier`, `eslint-config-prettier` e `eslint-plugin-prettier` come dependência de desenvolvimento:

   ```shell
   $ npm i prettier eslint-config-prettier eslint-plugin-prettier -D
   ```

2. Adicionar `"plugin:prettier/recommended"` como novo plugin no `.eslintrc.js`:

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

3. Configurar o Prettier a partir do arquivo `.prettierrc.js`:

   ```js
   module.exports = {
     semi: true,
     trailingComma: "all",
     singleQuote: true,
     printWidth: 80,
     tabWidth: 2,
   };
   ```
