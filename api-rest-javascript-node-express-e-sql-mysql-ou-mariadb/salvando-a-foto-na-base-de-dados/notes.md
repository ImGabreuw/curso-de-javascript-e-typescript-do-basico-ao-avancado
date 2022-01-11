# Salvando a foto na base de dados

> ## Tipo de ações no banco de dados

### **CASCADE**

* `ON DELETE CASCADE`: se o registro pai for deletado, o filho também será

* `ON UPDATE CASCADE`: se a *primary key* do registro pai for alterada, isso será refletido no registro filho

### **RESTRICT**

Prevenir qualquer tentativa de apagar ou atualizar o registro pai (é lançado um erro)

### **NO ACTION**

Não é executado nenhuma ação (apenas ignorado), ou seja, não é possível apagar ou atualizar a *primary key* do registro pai, além de prevenir a alteração da *foreign key* do registro filho, caso a primary key do registro pai ainda não tiver sido atualizado.

### **SET NULL**

Apagar ou atualizar a *primary key* do registro pai, a *foreign key* do registro filho é configurado para `NULL`.
