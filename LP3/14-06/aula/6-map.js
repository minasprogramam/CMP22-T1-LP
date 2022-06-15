/*
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    https://clovisdasilvaneto.github.io/explorando-javascript-filter-reduce-map-every-some-e-foreach
    ===> Map <===
    É criado um novo array com base no array atual
    array.map(elemento, idx, array => to-do)
*/

/* 
    Modifique o array numeros para 
    que ele mostre todos os elementos com valor dobrado 
    * esse é um bom caso para uso do Map, ele faz uma copia
    do array original, modifica ele e retorna.
*/

const numeros = [1, 2, 3];
const numerosDuplicados = numeros.map((e) => e * 2);
console.log(numerosDuplicados);

/* Mostre o nome das pessoas que tem friends como sua série favorita */
/*  ==================================
    ATENÇÃO: esse não foi um bom exemplo para o Map, aqui é necessário 
    fazemos uma verificação de um array que está dentro de um objeto 
    que está dentro do array. Temos um aninhamento que não nos permite 
    retornar o que precisamos com um Map. Na real, o que queremos aqui
    é filtrar as pessoas que assistem Friends, logo, faz mais sentido
    utilizarmos um filter.
    Seguem duas formas de se fazer. Qualquer duvida, estou a disposição <3
    
    Xeru enorme e sejam resilientes, vocês vão muito longe garotas
    ==================================
*/
const bonde = [
  {
    apelido: "Lis",
    idade: 27,
    vegetariana: true,
    pets: ["Lala", "Minerva Pantufa"],
    seriesPreferiadas: ["Black.ish", "The Handmaid's Tale", "This is Us"],
    saldoNaConta: 14242525.99,
  },
  {
    apelido: "Rafiz",
    idade: 24,
    vegetariana: false,
    pets: ["Pepe", "Ziggy", "Nenis"],
    seriesPreferiadas: [
      "Modern Family",
      "The Mentalist",
      "A menina sem qualidades",
    ],
    saldoNaConta: 0,
  },
  {
    apelido: "Pequena Eva",
    idade: 33,
    vegetariana: false,
    pets: [],
    seriesPreferiadas: ["Um maluco no pedaço", "Friends"],
    saldoNaConta: 0.27,
  },
  {
    apelido: "Celinda",
    idade: 24,
    vegetariana: false,
    pets: ["Amora", "Lua", "Tobby", "Rabito"],
    seriesPreferiadas: ["For Life", "stranger things", "Doce Magnolia"],
    saldoNaConta: 0,
  },
  {
    apelido: "Anna",
    idade: 25,
    vegetariana: true,
    pets: ["Filippo"],
    seriesPreferiadas: ["Friends", "this is us", "the handmaid's tale"],
    saldoNaConta: 0,
  },
  {
    apelido: "k",
    idade: 29,
    vegetariana: true,
    pets: ["will", "rudolphina", "travesti", "cookies", "dendê"],
    seriesPreferiadas: ["undone"],
    saldoNaConta: 1.9,
  },
  {
    apelido: "Gi",
    idade: 30,
    vegetariana: true,
    pets: ["Megui", "Liza", "Bart", "Rana", "Milhouse", "Homer", "China"],
    seriesPreferiadas: ["The Simpsons"],
    saldoNaConta: 1000000,
  },
  {
    apelido: "Line",
    idade: 29,
    vegetariana: false,
    pets: [],
    seriesPreferiadas: [" The Big Bang theory"],
    saldoNaConta: 20,
  },
  {
    apelido: "Anny",
    idade: 28,
    vegetariana: false,
    pets: [],
    seriesPreferiadas: [
      "Insecure",
      "Stranger Things",
      "The Fresh Prince",
      "Greenleaf",
    ],
    saldoNaConta: 15,
  },
  {
    apelido: "Nine",
    idade: 38,
    vegetariana: false,
    pets: [],
    seriesPreferiadas: ["How to get away with murder"],
    saldoNaConta: 1.0,
  },
  {
    apelido: "Bella",
    idade: 22,
    vegetariana: false,
    pets: ["Frida", "Kaleb", "Leon", "Jolie"],
    seriesPreferiadas: ["Girls", "Game of thrones"],
    saldoNaConta: 140,
  },
  {
    apelido: "Cah",
    idade: 27,
    vegetariana: false,
    pets: ["Snupi"],
    seriesPreferiadas: [
      "Breaking Bad",
      "The Big Bang Theory",
      "Game of Thrones",
    ],
    saldoNaConta: 100,
  },
  {
    apelido: "Toddy",
    idade: 43,
    vegetariana: false,
    pets: ["dogs"],
    seriesPreferiadas: ["24horas"],
    saldoNaConta: 0,
  },
  {
    apelido: "Deh",
    idade: 22,
    vegetariana: false,
    pets: ["Scooby-doo"],
    seriesPreferiadas: ["Maid"],
    saldoNaConta: 100,
  },
  {
    apelido: "Tavares",
    idade: 16,
    vegetariana: false,
    pets: ["Snoop"],
    seriesPreferiadas: ["Friends", "Broklyn nine"],
    saldoNaConta: 0,
  },
  {
    apelido: "Ana",
    idade: 24,
    vegetariana: false,
    pets: ["Zelda"],
    seriesPreferiadas: ["depende do humor do dia"],
    saldoNaConta: 80,
  },
  {
    apelido: "Be",
    idade: 27,
    vegetariana: false,
    pets: ["Jose Armando", "Rogerio Miguel"],
    seriesPreferiadas: ["moder family", "stranger things", "Pachinko"],
    saldoNaConta: 150,
  },
  {
    apelido: "Mari",
    idade: 24,
    vegetariana: false,
    pets: ["Leona"],
    seriesPreferiadas: ["Doctor Who", "Spy Familly", "The office", "Comunity"],
    saldoNaConta: 2.5,
  },
  {
    apelido: "Gabi",
    idade: 26,
    vegetariana: false,
    pets: [1, "Arepa"],
    seriesPreferiadas: ["Brooklyn Nine-Nine", "Yellowjackets", "The Office"],
    saldoNaConta: 0.2,
  },
  {
    apelido: "Mands",
    idade: 24,
    vegetariana: false,
    pets: ["Doralice", "Blade"],
    seriesPreferiadas: ["Watchmen", "Ela quer tudo", "Lovecrafty Country"],
    saldoNaConta: 50.0,
  },
  {
    apelido: "Meg",
    idade: 31,
    vegetariana: false,
    pets: ["Farofa", "Bisnaguinha"],
    seriesPreferiadas: ["Dark"],
    saldoNaConta: -1.2,
  },
  {
    apelido: "Carol",
    idade: 23,
    vegetariana: false,
    pets: ["Paçoca"],
    seriesPreferiadas: ["Grey's anatomy", "She's gotta have it"],
    saldoNaConta: -150,
  },
  {
    apelido: "Letícia",
    idade: 19,
    vegetariana: true,
    pets: ["Nico", "Maloka", "Zé", "Frajola"],
    seriesPreferiadas: ["Friends", "The Simpsons", "Hora de Aventura"],
    saldoNaConta: 2.5,
  },
  {
    apelido: "Lyw",
    idade: 25,
    vegetariana: false,
    pets: ["Tetuty, Juju"],
    seriesPreferiadas: ["The big Bang Theory"],
    saldoNaConta: 50.0,
  },
  {
    apelido: "Xeron",
    idade: 28,
    vegetariana: false,
    pets: ["Flora"],
    seriesPreferidas: ["Orphan Black", "B99", "Euphoria"],
    saldoNaConta: 2.5,
  },
  {
    apelido: "Well",
    idade: 29,
    vegetariana: true,
    pets: [],
    seriesPreferiadas: ["Game Of Thrones"],
    saldoNaConta: 132.14,
  },
];

/* Primeira maneira de fazer */
const pessoasAssistemFriends1 = bonde.filter((pessoa) => {
  if (pessoa.seriesPreferiadas)
    return pessoa.seriesPreferiadas.find((el) => el === "Friends");
});
// pessoasAssistemFriends1.forEach((pessoa) => console.log(pessoa.apelido));

/* Segunda maneira de fazer */
const pessoasAssistemFriends2 = bonde.filter(
  (pessoa) =>
    pessoa.seriesPreferiadas && pessoa.seriesPreferiadas.includes("Friends")
);
// pessoasAssistemFriends2.forEach((pessoa) => console.log(pessoa.apelido));

/* Terceira maneira de fazer - Maneira raiz! Pelo for */
const pessoasAssistemFriends3 = [];
for (let i = 0; i < bonde.length; i++) {
  let pessoa = bonde[i];

  if (pessoa.seriesPreferiadas) {
    for (let j = 0; j < pessoa.seriesPreferiadas.length; j++) {
      let serie = pessoa.seriesPreferiadas[j];

      if (serie === "Friends") {
        pessoasAssistemFriends3.push(bonde[i].apelido);
      }
    }
  }
}
// pessoasAssistemFriends3.forEach((pessoa) => console.log(pessoa.apelido));
