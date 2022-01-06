# Criando um servidor na Google Cloud Platform

> ## **Criação de um servidor no Google Cloud Platform**

1. Acessar: https://cloud.google.com

2. Clicar em `Comece a usar gratuitamente`

3. Após a criação da conta, no menu de navegação clicar em `Console`

4. Acessar o `Menu de navegação` (no canto superior esquerdo) e clicar na aba `Compute Engine`, em seguida `Instância de VM`

5. Ao entrar no menu de `Instâncias de VM`, basta clicar no botão de `Criar`

6. No meu `Criar uma instância`, informar os seguintes campos: 

    * `Nome`: nome do cluster
    
    * `Região`: região alocada para o servidor
      
      > **Recomendado**: `southamerica-east1 (São Paulo)`

    * `Configuração da máquina` > `Família de máquinas` > `Propósito geral` > `Tipo de máquina`: configurar a quantidade de recursos da máquina (memória e vCPU)

      > **Recomendado**: `n1-standard-1 (1 vCPU, 3,75 GB de memória)`

    * `Configuração da máquina` > `Disco de inicialização`: selecionar o sistema operacional do cluster

      > **Recomendado**: para produção o *Debian* / para fins de teste/estudo o Ubuntu (20.04) LTS

    * `Configuração da máquina` > `Firewall`: selecionar as 2 opções (`Permitir tráfego HTTP` e `Permitir tráfego HTTPS`)

7. Por fim clicar em `Criar`

> ## **Definir o IP externo do cluster como estático**

Esse procedimento é necessário apenas para vincular um domínio (DNS) ao IP externo de um cluster.

Recomendação de serviço DNS: [cloudflare](https://www.cloudflare.com/pt-br/)

**OBS**: só é possível ter apenas 1 IP estática, na conta gratuita

1. No menu `Instância de VM` (após a criação do cluster), clicar no botão com 3 pontinhos (da máquina em questão) e selecionar `Ver detalhes da rede`

2. No menu `Detalhes da interface de rede`, clicar na barra de navegação lateral (`Rede VPC`) e clicar na aba `Endereços de IP externos`

3. Definir o `Tipo` como `Estático` (ao invés de `Temporário`, definido como padrão)

4. Após realizar a etapa anterior, será exibido na tela um formulário (`Reservar um novo endereço IP estático`) para informar o `Nome` e `Descrição` (OPCIONAL).