#  Validando um CPF (Algoritmo)

> Referência: https://dicasdeprogramacao.com.br/algoritmo-para-validar-cpf/

> ## Explicação do algoritmo de validação do CPF

### Etapas

1. CPF fictício: `705.484.450-52`

2. Pegar cada número do CPF (exceto os dígitos, no caso `52`) e multiplicar por cada número da sequência de **10 até 2**:

    **7** * 10 + **0** * 9 + **5** * 8 + **4** * 7 + **8** * 6 + **4** * 5 + **4** * 4 + **5** * 3 + **0** * 2 = 237

3. Obter o 1º dígito do CPF: (número esperado é 5)

    11 - (**237** % 11) = 5

    > `237` é o resultado da operação realizada na etapa anterior.

    **IMPORTANTE**: se o 1º dígito for maior que **9**, deve ser adotado como **0**.

4. Pegar cada número do CPF + o dígito (obtido na etapa anterior) e multiplicar por cada número da sequência de **11 até 2**

    **7** * 11 + **0** * 10 + **5** * 9 + **4** * 8 + **8** * 7 + **4** * 6 + **4** * 5 + **5** * 4 + **0** * 3 + **5** * 2 = 284

5. Obter o 2ª dígito do CPF: (número esperado é 2)

    11 - (**284** % 11) = 2

    > `284` é o resultado da operação realizada na etapa anterior.

    **IMPORTANTE**: se o 2º dígito for maior que **9**, deve ser adotado como **0**.

5. Verificar se o CPF informado é igual ao CPF (dígito) calculado.

