# MariaDB, MySQL Workbench, Docker e Insomnia

> ## **Configuração do MySQL no GCP**

### **Instalação do Docker**

* Remover as versões antigas:

  ```sh
  $ sudo apt-get remove \
      docker \
      docker-engine \
      docker.io \
      containerd runc -y
  ```

* Atualizar os repositórios da máquina:

  ```sh
  $ sudo apt-get update && sudo apt-get upgrade
  ```

* Instalar as dependências:

  ```sh
  $ sudo apt install \
      apt-transport-https \
      ca-certificates \
      curl \
      gnupg-agent \
      software-properties-common -y
  ```

* Adicionar a chave GPG oficial do Docker

  ```sh
  $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
  ```

* Adicionar o repositório do Docker na máquina:

  ```sh
  $ sudo add-apt-repository \
      "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
      $(lsb_release -cs) \
      stable" -y
  ```

* Instalar o Docker Engine

  ```sh
  $ sudo apt install docker-ce docker-ce-cli containerd.io -y
  ```

### **Expor uma porta no servidor para o Docker poder ser acessado externamente**

1. No menu de `Instâncias de VM`

2. Clicar no botão com "3 prontinhos" > `Ver detalhes da rede` > `Regras de firewall`

3. No menu de `Regras de firewall` > clicar em `Criar regra de firewall` e informar os seguintes campos:

    * `Nome`: nome da regra de firewall

    * `Registros` = `desativado`

    * `Rede` = `default`

    * `Prioridade` = `1000`

    * `Direção do tráfego` = `Entrada`

    * `Ação se houver correspondência` = `Permitir`

    * `Destinos` = escolher a opção `Todas as instâncias na rede`

    * `Filtros de origem` = `Intervalos de IP`

    * `Intervalos de IP de origem` = `0.0.0.0/0` (liberar todas as redes)

      > **OBS**: geralmente a opção `0.0.0.0/0` é removida após a implantação da aplicação

    * `Segundo filtro de origem` = `Nenhum`

    * `Portas e protocolos`: informar o protocolo (geralmente TCP) e a porta do servidor para ser exposta (mesma porta utilizado no Docker)

      * **Exemplo**: em `Portas e protocolos`, selecionar a opção `Portas e protocolos específicos` e em seguida escolher o protocolo `TCP` e informar a porta (`3306`)

4. Por fim, clicar em `Criar`