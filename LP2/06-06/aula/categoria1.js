/*
Crie um programa que leia a idade do nadador e o classifique em uma das categorias:
"Infantil A": 5 a 7 anos
"Infantil B": 8 a 11 anos
"Juvenil A": 12 a 13 anos
"Juvenil B": 14 a 17 anos

Caso a pessoa não se encaixe em nenhuma categoria o programa deve retornar "Você não pode competir!" 
*/
const idade = 15;
switch(idade){
    case 5: 
    case 6: 
    case 7: 
        console.log("Voce é Infantil A");
        break;
    case 8:
    case 9:
    case 10:
    case 11:
        console.log("Você é Infantil B");
        break;
    case 12:
    case 13:
        console.log("Você é Juvenil A");
        break;
    case 14:
    case 15:
    case 16:
    case 17:
        console.log("Você é Juvenil B");
        break;
    default:
        console.log("Você não pode competir!");
        break;
}

