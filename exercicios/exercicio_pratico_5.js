/*
    Declare o seguinte Array:

    const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10];

    Utilizando o for (não for..in nem for..of), faça as seguintes operações:
        1. Liste todos os elementos do Array
        2. Liste apenas as notas que forem menor que 1
        3. Se houver no Array alguma nota igual a 10, adicione ao final do Array uma nova nota de 9.0
        4. Se houver no Array uma nota igual a 6.3, remova o último elemento do Array.
*/
const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10];

//1. Liste todos os elementos do Array
for (let cont = 0; cont < notas.length; cont++) {
  console.log(notas[cont]);
}

//2. Liste apenas as notas que forem menor que 1
for (let cont = 0; cont < notas.length; cont++) {
  if (notas[cont] < 1) console.log(notas[cont]);
}

//3. Se houver no Array alguma nota igual a 10, adicione ao final do Array uma nova nota de 9.0
for (let cont = 0; cont < notas.length; cont++) {
  if (notas[cont] === 10) notas.push(9);
}
console.log(notas);

//4. Se houver no Array uma nota igual a 6.3, remova o último elemento do Array.
for (let cont = 0; cont < notas.length; cont++) {
  if (notas[cont] === 6.3) notas.pop();
}
console.log(notas);
