/*
  Existem 2 formas de declarar variáveis no JS.
  var: não recomendado o uso, não respeita escopos (Hoisting).
  let: respeita o escopo e é recomendado o uso.
*/

let idade = 27; //declarando idade
console.log(idade);

idade = 12; //modificando idade
console.log(idade);

/* 
  Declarando constante em JS
  const: o valor de um dado imultável
*/
const cpf = "123";
console.log(cpf);
