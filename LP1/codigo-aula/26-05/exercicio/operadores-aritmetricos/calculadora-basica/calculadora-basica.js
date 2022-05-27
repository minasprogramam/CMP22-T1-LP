/* 
  Faça um programa que salva dois números e em seguida 
  realiza as seguintes operações: modulo, soma, subtração, 
  divisão e multiplicação. Em seguida exiba os
  resultados no console.
*/

// O parseInt converte o valor numerico recebido no
// formato de string em um dado do tipo Integer
const numero1 = parseInt(prompt("Digite o primeiro numero: "));
const numero2 = parseInt(prompt("Digite o segundo numero: "));

const modulo = numero1 % numero2;
// alert(`O módulo da divisão é ${modulo}`); // o alert mostra em formato de popup no navegador
console.log(`O módulo da divisão é ${modulo}`);

const soma = numero1 + numero2;
console.log(`A soma é ${soma}`);

const subtracao = numero1 - numero2;
console.log(`A subtração é ${subtracao}`);

const multiplicacao = numero1 * numero2;
console.log(`A multiplicação é ${multiplicacao}`);

const divisao = numero1 / numero2;
console.log(`A divisão é ${numero1 / numero2}`);
