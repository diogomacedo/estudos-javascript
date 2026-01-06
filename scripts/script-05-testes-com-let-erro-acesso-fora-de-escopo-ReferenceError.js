console.log('Testando a declaração de variáveis com \"let\" ');

let pi = 3.141592;

console.log('Exibindo o valor de uma variável chamada \"pi\" depois dela ter sido declarada:', pi);

console.log('---------- Testando o acesso  de \"pi\" fora do escopo ----------');

if (true) {

  console.log('Declarando uma variável \"x\" dentro de um bloco if');

  let x = 3.141592;

  console.log('Exibindo o valor da variável \"x\" dentro do bloco if:', x);

}

console.log('Exibindo o valor da variável \"x\" fora do bloco if:', x);