# Eslint

> ## **Configuração**

1. Iniciar um projeto Node com:

    ```sh
    $ npm init -y
    ```

2. Instalar o pacote `eslint` com NPX:

    ```sh
    $ npx eslint --init
    ```

3. Após executar o comando acima, é necessário selecionar algumas opções:

  * `How would you like to use ESLint?` = `To check syntax, find problems, and enforce code style`

  * `What type of modules does your project use?` = `JavaScript modules (import/export`

  * `Which framework does your project use?` = `None of these`

  * `Does your project use TypeScript?` = `No`

  * `Where does your code run?` = `Node`

  * `How would you like to define a style for your project?` = `Use a popular style guide`

  * `Which style guide do you want to follow?` = `Airbnb`

  * `What format do you want your config file to be in?` = `JavaScript`

  * `Would you like to install them now with npm?` = `npm`

> ## **Desativar uma regra do ESLint**

### **Via arquivo `.eslintrc.js`**

1. Descansar o mouse em cima do aviso do ESLint e após uns segundos aparecerá uma janela informando o erro e sua documentação

2. No final dessa janela, terá algo parecido com `eslint([nome da regra])`

3. Copiar o nome da regra e adicioná-la na chave `rules` do arquivo `.eslintrc.js`:

    ```js
    module.exports = {
      // ...
      rules: {
        "no-console": "off",
      },
    };
    ```

### Via comentário

```js
const teste = 22;

// eslint-disable-next-line
console.log(teste);
```

```js
const teste = 22;

console.log(teste); // eslint-disable-line
```
