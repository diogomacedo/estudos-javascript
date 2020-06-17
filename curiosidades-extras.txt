
- O uso de ponto-e-vírgula é um tanto quanto opcional.

- O node tem algo chamado ASI (Automatic Semicolon Insertion) que faz a predição do ponto-e-vírgula, adicionando-o. Em casos específicos essa predição falha.

Exemplo de falha na predição:

const x = 10
const y = 2
(function () {
    console.log(x + y)
})()

Explicação do erro: sem o ponto e vírgula, o interpretador tenta invocar uma função que não existe, juntando o número 2 com o bloco definido entre parênteses, definido na sequência.

Link sobre o assunto: http://www.ecma-international.org/ecma-262/7.0/index.html#sec-rules-of-automatic-semicolon-insertion

Exemplos legais: https://flaviocopes.com/javascript-automatic-semicolon-insertion/


------------------------------------------------------------------


