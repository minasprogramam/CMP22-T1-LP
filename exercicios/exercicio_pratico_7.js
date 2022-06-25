/*
Crie um array chamado família e nesse array salve 3 objetos. 

Cada objeto deve ter algumas informações de alguém da família: nome, idade, corPreferida (...). 
Por fim, crie uma função que utilize estruturas de repetição (for ou while) para varrer o array família 
e exibir no console as informações dos objetos.
*/

const listaPessoas = (listaPessoas) => {
  for (let pessoa of listaPessoas) {
    let nome = pessoa.nome;
    let idade = pessoa.idade;
    let corPreferida = pessoa.corPreferida;

    console.log(
      `${nome} tem ${idade} anos e sua cor preferida é ${corPreferida}`
    );
  }
};

const familia = [
  { nome: "Randall Pierce", idade: 35, corPreferida: "verde" },
  { nome: "Kevin Pierce", idade: 35, corPreferida: "roxo" },
  { nome: "Kate Pierce", idade: 35, corPreferida: "laranja" },
];
listaPessoas(familia);
