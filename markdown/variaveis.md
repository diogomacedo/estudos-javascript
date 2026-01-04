
[ Declaração de variáveis ]

* Existe 3 palavras reservadas usadas para declarar variáveis. São elas:

- var ( antes do ES6 )
- let ( após o ES6 )
- const ( após o ES6 )

* Ciclo de vida das variáveis

Envolve 3 etapas:

- Declaração: registro de nome da variável ( contexto de execução ou escopo )
- Inicialização: a variável é inicializada com o valor padrão ( undefined )
- Atribuição: um valor é atribuído diretamente a variável


a) var

- variável declarada e inicializada no escopo da função;
- não respeita o bloco, ou seja, é permitido acessar a variável fora do escopo onde foi criada;
- permite redeclaração ( comportamento estranho | pontos negativos )
- permite reatribuição ( comportamento normal )


CURIOSIDADE: toda vez que é executado algo em javascript, há uma função que envolve o trecho executado. 

Na montagem do contexto de execução, o interpretador passa pelo código e quando ele se depara com uma variável declarada com "var", ele faz a declaração no escopo do contexto de execução e a inicializa com undefined.


b) let ( mais restritiva do que o 'var' | é mais determinística no modo de agir )

- Foi criada uma nova palavra reservada para manter a retro compatibilidade dos códigos existentes;
- A variável é declarada no escopo da função;
- A variável é inicializada só depois;
- Respeita blocos;
- Permite reatribuição;
- Não permite redeclaração;

OBSERVAÇÃO: há uma separação entre a declaração e a Inicialização.

c) const

- A variável é declarada no escopo da função;
- A variável é inicializada só depois;
- Respeita blocos;
- Não permite reatribuição; ( a variável é uma constante )
- Não permmite redeclaração;


CURIOSIDADE: a área entre a declação e a Inicialização da variável é chamda de DEAD ZONE

* Uma variável declarada sem var, let ou const é criada ao escopo global ( pior cenário )

OBSERVAÇÃO: nunca declare variável sem var, let ou const

* Nomenclatura / identificador de variáveis

- Deve começar com [a-zA-Z_$] --> é o primeiro caracter 
- Após o primeiro caracter, deve ser seguido por [a-zA-Z0-9_$]

OBSERVAÇÃO:
- NÃO USAR O VAR
- NUNCA DEIXAR DE USAR let OU const;






