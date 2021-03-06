# Express Views

> ## **EJS**

### **Definição**

**EJS**: Embedded JavaScript templates

É uma motor de visualização que facilita a criação de páginas HTML com código JavaScript.

> ## **Express Views**

### **Definição**

É o mecanismo de renderização de páginas HTML a partir de um motor de visualização (EJS é mais similar com o HTML).

### **Configuração**

1. Instalar o EJS com NPM

    ```sh
    $ npm install ejs
    ```

2. Especificar o diretório que contém os *template views* (arquivos com extensão `.ejs`):

    ```js
    set(
      [nome do diretório],
      [caminho do diretório]
    )
    ```

    > **OBS**: é recomendável informar o **caminho absoluto** do `[caminho do diretório]`, pois o caminho relativo pode gerar erros.

    ```js
    // server.js
    app.set("views", path.resolve(__dirname, "src", "views"));
    ```

3. Configurar o EJS como motor de visualização no *Express*:

    ```js
    // server.js
    app.set("view engine", "ejs");
    ```

4. Criar os *template views*:

    ```html
    <!-- index.ejs -->
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Testes</title>
    </head>
    <body>
      <h1>Eu fui renderizado</h1>
    </body>
    </html>
    ```

5. Definir a função do *end-point* responsável por renderizar a página:

    ```js
    // homeController.js
    exports.paginaInicial = (req, res) => {
      res.render("index")
    };
    ```

    > **OBS**: não é necessário informar a extensão do arquivo de visualização.