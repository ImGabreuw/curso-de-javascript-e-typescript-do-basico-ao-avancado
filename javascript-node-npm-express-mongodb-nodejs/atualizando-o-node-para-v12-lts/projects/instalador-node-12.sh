# Remover a versão anterior do Node
sudo apt purge --auto-remove nodejs -y
sudo rm /etc/apt/sources.list.d/nodesource.list*

# Instalar o curl
sudo apt install curl -y

# Baixar a versão 12 do Node
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
sudo apt install nodejs -y
