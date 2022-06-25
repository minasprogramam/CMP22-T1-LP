/*
Crie variáveis com os tipos de dados que você aprendeu na aula de hoje
1. String
2. Int
3. Double
4. Float
5. Boolean

Em seguida concatene elas para formar uma frase e mostre no console. 

*/

const nomeEmpresa = "AnYnA";
const anoFundacao = 2020;
const caixaFinanceiro = 32342.213;
const gastoAnual = 13423.89238323;
const estaFuncionando = true;

console.log(
  `A empresa ${nomeEmpresa} foi fundada no ano de ${anoFundacao}, no ano de 2021 teve um gasto de R$ ${gastoAnual} e um caixa financeiro de R$ ${caixaFinanceiro}. Dessa forma, a ampresa enconta-se ${
    estaFuncionando ? "funcionando" : "fechada"
  }!`
);
