/*
Crie uma função que receba como parâmetro o nome da pessoa e a idade, 

caso a pessoa seja maior de 18 anos a função deve retornar "nomeDaPessoa é de maior e tem x anos", 
caso seja de menor "nomeDaPessoa é de maior e tem x anos".

Em seguida chame essa função quatro vezes, passando 3 diferentes dados.
*/

const verificadorDeMaioridade = (nome, idade) => {
  if (idade >= 18) {
    return `${nome} é de maior e tem ${idade} anos`;
  } else {
    return `${nome} é de menor e tem ${idade} anos`;
  }
};

console.log(verificadorDeMaioridade("Lisandra Cruz", 27));
console.log(verificadorDeMaioridade("Luana Branco", 14));
console.log(verificadorDeMaioridade("Zoe Lima", 8));
