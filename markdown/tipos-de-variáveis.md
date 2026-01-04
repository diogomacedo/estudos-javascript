[ Tipos de Dados ]

* Dividem-se em:

    - Primitivos
    - Objetos

* Os tipos primitivos são imutáveis

* Existem 6 tipos primitivos: number, string, boolean, symbol ( novo - foi add no ES6 ) , null ( curiosidade: quando o comando typeof é executado em cima de um "null", ele retorna öbject") e undefined

CURIOSIDADE 01: REPL - terminal do node "Read Eval Print and Loop"
CURIOSIDADE 02: typeof é uma função que exibe/mostra o tipo de dado envolvido. O typeof não é igual ao instanceof. Um typeof "object" pode ser um instanceof de "date" ou "array".

CURIOSIDADE 03: O javascript adiciona os tipos primitivos num "wrapper" ( processo de boxing - como se fossem objetos ) para disponibilizar algumas funcionalidades padrão referente ao tipo de variável(Prototype)

* Objetos são valores que representam uma referência em memória que pode ser alterada

CURIOSIDADE 04: A função tem um tipo de dado específico e também passa pelo processo de boxing

CURIOSIDADE 05: typeof e instanceof são operadores

[ Tipo "Number" ]

* É primitivo, imutável e representado internamente ( maneira de armazenamento em memória ) pelo padrão IEEE 754 de 64 bits ( 8 bytes )

CURIOSIDADE 01: Um ponto fraco do javascript ter somente um tipo de dados numérico é que ele não tem possibilidade de economizar memória

* O javascript suporte 4 sistemas de numeração: decimal ( base 10; inicia com números entre 1 e 9, e é seguido por números de 0 a 9, com ou sem ponto ), hexadecimal ( base 16; deve iniciar com 0x ou 0X, é seguido por números entre 0 e 9, e letras entre A e F ), binário ( base 2; deve iniciar com 0b ou 0B, seguidos por números entre 0 e 1) e octal ( base 8; deve iniciar com 0, 0o ou 0O, seguido por números entre 0 e 7)

CURIOSIDADE 02: Números podem ser instanciados -> new Number(10), new Number(010), new Number(0x12)

Na curiosidade acima acontece o processo de autoboxing... o tipo primitivo é "encaixado" num objeto para ganhar algumas funcionalidades... por exemplo: "encaixotando" um número num objeto, podemos utilizar as funções/métodos "toExponential()", "toFixed()" e "toPrecision()" para mudar a forma como esse número é representado...

"toExponential()" -> anotação científica
"toFixed()" -> quantidade de casas decimais após a vírgula
"toPrecision()" -> quantidade total de algarismos / números 


