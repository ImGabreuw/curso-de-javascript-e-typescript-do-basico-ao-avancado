# Revisitando o tsconfig.json

> ## **Opções do compilador (`compilerOptions`)**

### **sourceMap**

É uma propriedade booleana e tem a função de gerar correspondendo os arquivos `.map` do _bundle_ com o código fonte.

### **rootDir**

Indicar o diretório raiz do arquivo de entrada.

### **removeComments**

É uma propriedade booleana e tem a função de remover os comentários do código fonte ao compilá-lo em um _bundle_.

### **noEmit**

É uma propriedade booleana e tem a função de não emitir os arquivos de saído, ou seja, não gerar o _bundle_.

### **noEmitOnError**

É uma propriedade booleana e tem a mesma função do **noEmit**, porém isso só ocorrerá enquanto o código apresentar um erro de compilação.

### **strict**

Geralmente essa opção é desabilitada em processos de migração de código JavaScript para TypeScript.

É uma propriedade booleana e tem a função de realizar as validações no código, como por exemplo:

- Não permitir tipos _any_

- _Null checks_

- Validação de tipos de função

- etc

### **experimentalDecorators** e **emitDecoratorMetadata**

São propriedades booleanas e estão relacionados com uma funcionalidade experimental no TypeScript que é os **decorators** (são como as _Annotations_ no Java).
