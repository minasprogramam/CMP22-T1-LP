const aluna = { nome: "Minerva Pantufa", idade: "3 meses" };
const professora = { nome: "Lisandra Cruz", cargo: "Professora", empresa: "Minas Programam", signo: "Leão" };
const disciplinaLP = ["LP1", "LP2", "LP3"];

/* concatene todas as informações presentes em professora, 
aluna e disciplinaLP em um único parágrafo/frase */
console.log(`A aluna ${aluna.nome} está estudando as disciplinas ${disciplinaLP[0]}, ${disciplinaLP[1]} e ${disciplinaLP[2]} com a professora ${professora.nome} no ${professora.empresa}`);