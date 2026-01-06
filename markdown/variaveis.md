# Variáveis

## Declaração

O **javascript** tem três palavras reservadas para declarar variáveis:

- var
- let
- const

**var** existe desde a primeira versão do javascript.<br>
**let** e **const** foram introduzidas no **ES6**.

> O **ES6** é o **ECMAScript 6**.<br>
> Ele foi lançado em 2015 e por isso foi batizado oficialmente de **ECMAScript 2015**.

## Ciclo de vida das variáveis

Envolve 3 etapas:

1. **Declaração**: registro de nome da variável ( contexto de execução ou escopo )
1. **Inicialização**: a variável é inicializada com o valor padrão ( *undefined* )
1. **Atribuição**: um valor é atribuído diretamente a variável

> É importante ressaltar que há uma separação entre declaração e inicialização, ou seja, são etapas diferentes que acontecem em momentos diferentes.

## Declarando uma variável com **var**

- É declarada e inicializada no escopo da função;
- Não respeita o bloco, ou seja, é permitido acessar a variável fora do escopo onde foi criada;
- Permite redeclaração;
- Permite reatribuição.

Na montagem do contexto de execução, o interpretador passa pelo código e quando ele se depara com uma variável declarada com **var**, ele faz a declaração dela no início do contexto de execução e a inicializa com *undefined*.

O arquivo [script-01-testes-com-var.js](./../scripts/script-01-testes-com-var.js) tem alguns testes utilizando **var**.

## Declarando uma variável com **let**

- É mais restritiva do que o **var**, ou seja, é mais determinística no modo de agir;
- Foi criada para manter a retro compatibilidade dos códigos existentes;
- A variável é declarada no escopo da função e é inicializada só depois;
- Respeita o bloco onde foi declarada;
- Permite reatribuição;
- Não permite redeclaração.

Segue abaixo uma tabela com arquivos contendo testes de variáveis declaradas com **let**.

| Nome do arquivo | Cenário testado |
| --------------- | --------------- |
| [script-02-testes-com-let.js](./../scripts/script-02-testes-com-let.js) | Declaração e reatribuição de variável |
| [script-03-testes-com-let-erro-acesso-antes-da-declaracao-ReferenceError.js](./../scripts/script-03-testes-com-let-erro-acesso-antes-da-declaracao-ReferenceError.js) | Acesso de variável antes da declaração - lançamento de exceção |
| [script-04-testes-com-let-erro-redeclaracao-SyntaxError.js](./../scripts/script-04-testes-com-let-erro-redeclaracao-SyntaxError.js) | Redeclaração de variável - lançamento de exceção |
| [script-05-testes-com-let-erro-acesso-fora-de-escopo-ReferenceError.js](./../scripts/script-05-testes-com-let-erro-acesso-fora-de-escopo-ReferenceError.js) | Acesso de variável fora de escopo - lançamento de exceção |

## Declarando uma variável com **const**

- É declarada no escopo da função, mas é inicializada só depois;
- Respeita o bloco onde foi declarada;
- Não permite reatribuição;
- Não permmite redeclaração.

## Curiosidades e observações

- Permitir a redeclaração de uma variável é um comportamento estranho.
- Toda vez que algo é executado em javascript, há uma função que envolve o trecho executado. 
- Uma variável criada através de **const** é uma **constante**. É por isso que não é possível fazer uma reatribuição.
- A área entre a **declação** e a **inicialização** de uma variável é chamada de **DEAD ZONE**.
- Uma variável declarada sem **var**, **let** ou **const** é criada no **escopo global**, por isso é importante nunca declarar variável sem **var**, **let** ou **const**.

## Como nomear / identificar as variáveis

- Os nomes das variáveis devem começar com alguma letra, underline ou cifrão, ou seja, deve respeitar o seguinte regex **[a-zA-Z_$]**; 
- Após o primeiro caracter, além dos caracteres mencionados no tópico acima, é possível utilizar números, ou seja, deve respeitar o seguinte refex **[a-zA-Z0-9_$]**.

<br>
<br>

[Voltar para a página principal](./../README.md)