# Instalando e configurando o NGINX (Proxy Reverso)

> ## **NGINX**

### **Configuração do NGINX para conexão via HTTP**

> Não recomendado, pois não é seguro.

1. Copiar as configurações abaixo:

    ```
    server {
      listen 80;
      listen [::]:80;

      # Add index.php to the list if you are using PHP
      index index.html index.htm index.nginx-debian.html index.php;

      server_name [IP externo do cluster];

      location = /favicon.ico { access_log off; log_not_found off; }
      
      location / {
        proxy_pass http://localhost:[porta da aplicação];
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
      }

      # deny access to .htaccess files, if Apache's document root
      # concurs with nginx's one
      #
      location ~ /\.ht {
        deny all;
      }

      location ~ /\. {
        access_log off;
        log_not_found off;
        deny all;
      }

      gzip on;
      gzip_disable "msie6";

      gzip_comp_level 6;
      gzip_min_length 1100;
      gzip_buffers 4 32k;
      gzip_proxied any;
      gzip_types
        text/plain
        text/css
        text/js
        text/xml
        text/javascript
        application/javascript
        application/x-javascript
        application/json
        application/xml
        application/rss+xml
        image/svg+xml;

      access_log off;
      #access_log  /var/log/nginx/[IP externo do cluster]-access.log;
      error_log   /var/log/nginx/[IP externo do cluster]-error.log;

      #include /etc/nginx/common/protect.conf;
    }
    ```

2. Entrar no cluster na GCP via SSH

3. Criar o arquivo de configuração do NGINX no cluster, com o comando:

    ```sh
    $ sudo nano /etc/nginx/sites-enabled/[nome do domínio]
    ```

4. Colar o trecho de código copiado anteriormente no arquivo `[nome do domínio]` (criado na etapa anterior)

5. Validar a nova configuração do NGINX com os seguintes comandos:

    * `$ sudo rm default`

    * `$ sudo nginx -t`

6. Reiniciar o NGINX para aplicar essa configuração com:

    ```sh
    $ sudo systemctl restart nginx
    ```

### **Configuração do NGINX para conexão via HTTP**

1. `$ sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048`

2. `$ sudo apt-get install certbot`

3. `$ sudo service nginx stop`

4. `$ sudo certbot certonly --standalone -d [domínio]`

5. `$ sudo service nginx start`

6. `sudo certbot renew`

7. Criar o arquivo de configuração do NGINX no cluster, com o comando:

    ```sh
    $ sudo nano /etc/nginx/sites-enabled/[nome do domínio]
    ```

8. Colar o trecho de código copiado anteriormente no arquivo `[nome do domínio]` (criado na etapa anterior):

    ```
    # O servidor não vai responder via IP
    server {
      listen 80 default_server;
      server_name _;
      return 404;
    }

    # Redireciona para HTTPS
    server {
      listen 80;
      listen [::]:80;
      server_name [IP externo do cluster];
      return 301 https://$host$request_uri;
    }

    # HTTPS
    server {
      listen 443 ssl http2;
      listen [::]:443 ssl http2;

      server_name [IP externo do cluster];

      # O servidor só vai responder pra este domínio
      if ($host != "[IP externo do cluster]") {
        return 404;
      }
      
      ssl_certificate /etc/letsencrypt/live/[IP externo do cluster]/fullchain.pem; # managed by Certbot
      ssl_certificate_key /etc/letsencrypt/live/[IP externo do cluster]/privkey.pem; # managed by Certbot
      ssl_trusted_certificate /etc/letsencrypt/live/[IP externo do cluster]/chain.pem;

      # Improve HTTPS performance with session resumption
      ssl_session_cache shared:SSL:10m;
      ssl_session_timeout 5m;

      # Enable server-side protection against BEAST attacks
      ssl_prefer_server_ciphers on;
      ssl_ciphers ECDH+AESGCM:ECDH+AES256:ECDH+AES128:DH+3DES:!ADH:!AECDH:!MD5;

      # Disable SSLv3
      ssl_protocols TLSv1 TLSv1.1 TLSv1.2;

      # Diffie-Hellman parameter for DHE ciphersuites
      # $ sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 4096
      ssl_dhparam /etc/ssl/certs/dhparam.pem;

      # Enable HSTS (https://developer.mozilla.org/en-US/docs/Security/HTTP_Strict_Transport_Security)
      add_header Strict-Transport-Security "max-age=63072000; includeSubdomains";

      # Enable OCSP stapling (http://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox)
      ssl_stapling on;
      ssl_stapling_verify on;
      resolver 8.8.8.8 8.8.4.4 valid=300s;
      resolver_timeout 5s;

      # Add index.php to the list if you are using PHP
      index index.html index.htm index.nginx-debian.html index.php;

      location = /favicon.ico { access_log off; log_not_found off; }
      
      location / {
        proxy_pass http://localhost:[porta];
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
      }

      # deny access to .htaccess files, if Apache's document root
      # concurs with nginx's one
      #
      location ~ /\.ht {
        deny all;
      }

      location ~ /\. {
        access_log off;
        log_not_found off;
        deny all;
      }

      gzip on;
      gzip_disable "msie6";

      gzip_comp_level 6;
      gzip_min_length 1100;
      gzip_buffers 4 32k;
      gzip_proxied any;
      gzip_types
        text/plain
        text/css
        text/js
        text/xml
        text/javascript
        application/javascript
        application/x-javascript
        application/json
        application/xml
        application/rss+xml
        image/svg+xml;

      access_log off;
      #access_log  /var/log/nginx/[IP externo do cluster]-access.log;
      error_log   /var/log/nginx/[IP externo do cluster]-error.log;

      #include /etc/nginx/common/protect.conf;
    }
    ```

### **Renovação do certificado**

O certificado deve ser renovado a cada determinado tempo, e para isso basta utilizar o comando:

  ```sh
  $ sudo certbot renew
  ```

**OBS**: é enviado um email (informado no comando `$ sudo certbot certonly --standalone -d [domínio]`) para avisar sobre a expiração do certificado