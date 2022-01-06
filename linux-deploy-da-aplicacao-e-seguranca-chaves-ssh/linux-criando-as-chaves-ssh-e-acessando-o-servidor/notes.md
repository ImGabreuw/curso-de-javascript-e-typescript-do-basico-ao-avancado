# Linux: criando as chaves SSH e acessando o servidor

> ## **Criar chave SSH (no Ubuntu)**

1. Abrir o terminal (`CTRL + ALT + T`)

2. Digitar o comando: `$ ssh-keygen -f ~/.ssh/[nome do arquivo] -t rsa -b 4096`

    > `-f ~/.ssh/[nome do arquivo]`: especificar o local na máquina onde arquivo contendo a chave SSH (pública e privada) será armazenada

3. (OPCIONAL) Definir um senha para a chave SSH (esse senha só é requerida quando for utilizá-la)

**IMPORTANTE**: a chave pública tem o sufixo `.pub`

> ## **Acessar o servidor na GCP via chave SSH**

1. Copiar a chave pública (com extensão `.pub`)

2. Acessar o menu `Compute Engine` > `Metadados`

3. No menu `Metadados` > `Chaves SSH`, clicar em `Adicionar chaves SSH`

4. Informar a chave pública na caixa de texto e depois clicar em `Salvar`

    > **OBS**: é criado automaticamente um usuário, no servidor, com o mesmo nome do usuário logado na máquina local

5. No terminal, digitar o comando: `$ ssh [usuário]@[IP externo do cluster]`

    **IMPORTANTE**: após utilizar o comando acima, o terminal é vinculado com o cluster na GCP (e não mais na máquina local), portanto CUIDADO ao utilizar comandos nesse terminal.

6. Para sair basta digitar: `$ exit`