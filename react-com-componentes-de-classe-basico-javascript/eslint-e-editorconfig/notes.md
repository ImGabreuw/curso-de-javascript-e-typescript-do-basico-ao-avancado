# Eslint e Editorconfig

> ## **Configuração do Eslint em projetos React**

### **Pre-requisitos**

* Extensões do VS Code: **ESLint** e **EditorConfig for VS Code**

### **Configuração**

1. Criar o arquivo `.editorconfig` na raiz do projeto e inserir as seguintes configurações:

    ```properties
    root = true

    [*]
    indent_style = space
    indent_size = 2
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    ```

2. Baixar os pacotes `eslint` e `babel-eslint` como dependência de desenvolvimento:

    ```shell
    $ npm i eslint babel-eslint -D
    ```

    > Flag `-D` é equivalente a `--save-dev`

3. Definir as configurações do ESLint com o comando a seguir:

    ```shell
    $ npx eslint --init
    ```

> ## **IMPORTANTE**

### **Referência**

* https://stackoverflow.com/questions/59021924/error-failed-to-load-parser-babel-eslint-declared-in-eslintrc-cannot-find

* https://stackoverflow.com/questions/69554485/eslint-error-must-use-import-to-load-es-module

* https://babeljs.io/blog/2020/07/13/the-state-of-babel-eslint

**O pacote `babel-eslint` (depreciado) foi substituído por `@babel/eslint-parser`, para corrigir isso basta realizar as seguintes etapas:**

1. Remover o pacote `babel-eslint`:

    ```shell
    $ npm remove babel-eslint
    ```

2. Instalar os pacotes `@babel/eslint-parser` e `@babel/eslint-plugin` como dependência de desenvolvimento:

    ```shell
    $ npm install -D @babel/eslint-parser @babel/eslint-plugin`
    ```

3. No arquivo `.eslintrc.js`, substituir `parser: 'babel-eslint'` por `parser: 'eslint-parser'`

4. No arquivo `.eslintrc.js`, adicionar no campo `plugins`: `jsx`

5. Resultado

    ```js
    module.exports = {
      env: {
        browser: true,
        es2021: true,
      },
      extends: [
        'plugin:react/recommended',
        'airbnb',
      ],
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: [
        'react',
        'jsx',
      ],
      rules: {
        'react/jsx-filename-extension': 'off',
      },
    };
    ```
