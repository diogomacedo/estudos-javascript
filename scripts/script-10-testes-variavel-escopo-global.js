
console.log('Declaração de variável global');

(function(){
  pi = 3.141592;
})();

console.log('Exibindo o valor da variável global \"pi\" após a declaração:', pi);

(function teste(){
  console.log('Exibindo o valor da variável global \"pi\" após a declaração, em outra função:', pi);
})();
