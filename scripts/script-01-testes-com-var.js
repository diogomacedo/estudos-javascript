console.log('Testando a declaração de variáveis com \"var\" ');

console.log('Exibindo o valor de uma variável chamada \"pi\" antes dela ter sido declarada:', pi);

var pi = 3.141592;

console.log('Exibindo o valor de uma variável chamada \"pi\" depois dela ter sido declarada:', pi);

console.log('---------- Reatribuindo o valor da variável \"pi\" para 3 ----------');

pi = 3;

console.log('Exibindo o valor atualizado da variável \"pi\":', pi);

console.log('---------- Executando o comportamento estranho de \"var\" ----------');

console.log('Redeclarando a variável \"pi\" com o valor \"2\"');

var pi = 2;

console.log('Exibindo o valor atualizado da variável \"pi\" após a redeclaração:', pi);

console.log('---------- Testando o acesso  de \"var\" fora do escopo ----------');

console.log('Declarando uma variável \"x\" dentro de um bloco if');

if (true) {
  var x = 3.141592;
    console.log('Exibindo o valor da variável \"x\" dentro do bloco if:', x);
}

console.log('Exibindo o valor da variável \"x\" fora do bloco if:', x);