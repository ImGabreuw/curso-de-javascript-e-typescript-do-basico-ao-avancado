# Navegador vs Node (HTML + JavaScript)

### Executar um arquivo JavaScript (`.js`) via Node

* **Sintaxe**: `$ node <caminho até o arquivo>`

* **Exemplo**: `$ node curso-de-javascript-e-typescript-do-basico-ao-avancado/javascript-basico/navegador-vs-node/projects/index.js`

### Gerar a estrutura base do HTML (no VS Code)

* **Emmet Abbreviation**

  * Digitar `!` > apertar `Enter`

  * Estrutura a ser gerada

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      
    </body>
    </html>
    ```

* **Emmet Abbreviation**

  * Digitar `html:5` > apertar `Enter`

  * Estrutura a ser gerada

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      
    </body>
    </html>
    ```

### Executar comandos JavaScript no HTML

* Tag `<script>` (não é uma boa prática)

  * Utilizar dentro da tag `<head>` (não é uma boa prática pois pode retardar o carregamento da página)

    * **Exemplo**

      ```html
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Minha primeira página HTML</title>
        <script>
          // Comentário
          console.log("Olá");
        </script>
      </head>
      <body>
        
      </body>
      </html>
      ```

  * Utilizar dentro da tag `<body>`

    * **Exemplo**

      ```html
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Minha primeira página HTML</title>
      </head>
      <body>
        <script>
          // Comentário
          console.log("Olá");
        </script>
      </body>
      </html>
      ```

### Exibir o código fonte da página no navegador (Google Chrome)

* **Atalho**: `CONTROL + U`