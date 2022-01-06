# Instalando o Node e o Pm2 no servidor

> ## `pm2`

### **Definição**

É um gerenciador de processos para aplicações em Node.js.

### **Configuração**

1. Instalar o pacote `pm2`:

    ```sh
    $ sudo npm i -g pm2
    ```

2. Iniciar um processo para a aplicação com `pm2`

    ```sh
    $ pm2 start [caminho do arquivo de entrada] --name [nome da aplicação]
    ```

    ```sh
    $ pm2 start /home/luizotavio/agenda/server.js --name Agenda
    ```

3. Interromper um processo com `pm2`

      ```sh
      $ pm2 stop [nome da aplicação]
      ```

      ```sh
      $ pm2 stop Agenda
      ```

4. Copiar e colocar a saída do comando: 

    ```sh
    npm startup
    ```
  