# Express + Nodemon

> ## **Nodemon**

### **Definição**

É uma biblioteca de monitoramento de arquivos do projeto e caso tenha altura alteração, o servidor (do *express*, por exemplo) é reiniciado.

### **Configuração**

1. Instalar o **nodemon** como dependência de desenvolvimento:

    ```sh
    $ npm i nodemon --save-dev
    ```

2. Executar o comando para monitor os arquivos do projeto:

    ```sh
    $ npx nodemon [arquivo de entrada da aplicação]
    ```

    ```sh
    $ npx nodemon server.js
    ```

3. (OPCIONAL) Criar um script (`package.json`) para executar o comando da etapa anterior:

    ```json
    {
      "scripts": {
        "start": "nodemon [arquivo de entrada da aplicação]",
        // ...
      },
    }
    ```

    ```json
    {
      "scripts": {
        "start": "nodemon server.js",
        // ...
      },
    }
    ```