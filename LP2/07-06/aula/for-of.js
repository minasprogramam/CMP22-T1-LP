/*
    O for..of é utilizado em arrays
*/

const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10, 3, 4, 6, 2, 5, 6, 3];
// for(let i = 0; i < notas.length; i++) {
//     console.log(notas[i])
// }

for(const nota of notas) {
    console.log(nota);
}
