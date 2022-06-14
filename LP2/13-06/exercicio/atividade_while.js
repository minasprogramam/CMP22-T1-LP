/*
    Utilizando o while, permita que o programa leia números maiores que zero, 
    quando o usuário digitar um número não permitido (zero ou menor) o programa deve encerrar 
    e mostrar quantos números foram digitados e a média deles.

    dicas: array, while/do while, média é calculada pela divisão da quantidade pela soma dos valores
*/
const numeros = [];

let numero = parseInt(prompt("Digite um número: "));
while (numero > 0) {
  numeros.push(numero);
  numero = parseInt(prompt("Digite um número: "));
}

// let numero;
// do {
//   numero = parseInt(prompt("Digite um número: "));
//   numeros.push(numero);
// } while (numero > 0);

const qtddNumerosDigitados = numeros.length;
let somaNumerosDigitados = 0;
for (let i = 0; i < qtddNumerosDigitados; i++) {
  somaNumerosDigitados = somaNumerosDigitados + numeros[i];
}
//transformando a soma de arrays em função
/*
  function mediaNumerosDigitados(array) {
    const qtddNumerosDigitados = array.length;
    let somaNumerosDigitados = 0;

    for (let i = 0; i < qtddNumerosDigitados; i++) {
      somaNumerosDigitados = somaNumerosDigitados + array[i];
    }
    
    return somaNumerosDigitados/qtddNumerosDigitados;
  }
  const mediaNumerosDigitados = mediaNumerosDigitados(numeros)
*/
const mediaNumerosDigitados = somaNumerosDigitados / qtddNumerosDigitados;

console.log(`${qtddNumerosDigitados} números foram digitados: ${numeros}`);
console.log(`A média é igual a ${mediaNumerosDigitados}`);
