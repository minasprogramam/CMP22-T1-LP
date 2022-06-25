/* 
    Determine se um número é impar ou par
*/

const numero = 3;

if (numero % 2 === 0) console.log("este numero é par");
else console.log("este numero é impar");

/*
**Extra**
Criando uma função que verifique se um numero é impar ou par
*/

function verificaSePar(numero) {
  if (numero % 2 === 0) return `${numero} é par`;
  else return `${numero} é impar`;
}

console.log(verificaSePar(2));
console.log(verificaSePar(5));
console.log(verificaSePar(34));
console.log(verificaSePar(99));
