/*
  Crie um programa que receba 2 números, calcule a soma deles e em seguida verifique se essa soma é maior que 100. 
    Caso seja maior que 100, retorne "Esse número é maior que 100"
    aso seja igual a 100, retorne "Bingo! Deu 100!"
    Caso seja menor que 100, retorne "Esse número é menor que 100"
*/

const numeroUm = 50;
const numeroDois = 5;
const soma = numeroUm + numeroDois;

if (soma > 100) {
  console.log("Esse numero é maior que 100");
} else if (soma === 100) {
  console.log("Esse numero é igual a 100");
} else if (soma < 100) {
  console.log("Esse numero é menor que 100");
}
