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

## Declarando uma variável com **var**

- Declarada e inicializada no escopo da função;
- Não respeita o bloco, ou seja, é permitido acessar a variável fora do escopo onde foi criada;
- Permite redeclaração
- Permite reatribuição

> Permitir a redeclaração de uma variável é um comportamento estranho.

> **Curiosidade**: toda vez que algo é executado em javascript, há uma função que envolve o trecho executado. 

Na montagem do contexto de execução, o interpretador passa pelo código e quando ele se depara com uma variável declarada com **var**, ele faz a declaração no início do contexto de execução e a inicializa com *undefined*.

## Declarando uma variável com **let**

- **let** é mais restritiva do que o **var**, ou seja, podemos dizer que é mais determinística no modo de agir.
- Foi criada para manter a retro compatibilidade dos códigos existentes;
- A variável é declarada no escopo da função e é inicializada só depois;
- Respeita blocos;
- Permite reatribuição;
- Não permite redeclaração;

> Há uma separação entre a declaração e a Inicialização.

## Declarando uma variável com **const**

- A variável é declarada no escopo da função;
- A variável é inicializada só depois;
- Respeita blocos;
- Não permite reatribuição;
- Não permmite redeclaração;

Uma variável criada através de **const** é uma constante. É por isso que não é possível fazer uma reatribuição.

> **Curiosidade**: a área entre a *declação* e a *inicialização* da variável é chamda de **DEAD ZONE**.

Uma variável declarada sem **var**, **let** ou **const** é criada ao **escopo global**.

Nunca declarar variável sem var, let ou const.

## Como nomear / identificar as variáveis

- Deve começar com **[a-zA-Z_$]**, ou seja, o primeiro caracter deve possuir um desses valores; 
- Após o primeiro caracter, deve ser seguido por [a-zA-Z0-9_$]

