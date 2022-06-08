/*
    O for..in é utilizado em objetos
*/
const refeicoes = { manha: "café com pão", tarde: "macarronada", noite: "PIZZA" };
console.log(refeicoes.manha);
console.log(refeicoes.tarde);
console.log(refeicoes.noite);

for(const chave in refeicoes) {
    console.log(refeicoes[chave]);
}