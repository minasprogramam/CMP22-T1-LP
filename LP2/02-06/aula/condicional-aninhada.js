/* 
  utilizamos a instrução "else if(condição necessária) { bloco de código }""
  quando temos a necessidade de verificar mais de uma condição na nossa
  analise.
*/

const numeroAnalisado = 11;

if (numeroAnalisado === 10) {
  console.log("Esse número é igual a 10");
} else if (numeroAnalisado > 10) {
  console.log("Esse número é maior que 10");
} else if (numeroAnalisado > 0) {
  console.log("Esse número é menor que 10");
}

// Verificando se número é maior que zero ou não
if (numeroAnalisado < 0) {
  console.log("Esse numero é menor que zero");
} else {
  console.log("Esse numero é maior que zero");
}

// Entendendo melhor a tabela verdade
const produto1 = "mortadela";
const produto2 = "mentos";
const produto3 = "chocolate";

if (produto1 === "queijo" || produto2 === "café" || produto3 === "pão") {
  console.log("Valeu! Ganhasse um pix de 2 reais");
} else {
  console.log("Vacilou, sem pix p vc!");
}
