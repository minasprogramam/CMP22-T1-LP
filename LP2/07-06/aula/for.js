/*
    for(let i = 0; i <= 10; i++) 
    Leia: para i igual a zero, 
    enquanto i for menor ou igual a 10 
    execute o que tiver dentro do for 
    e some mais um a i
    
    SE LIGA 
    --
    Enquanto a condição for VERDADEIRA o código rodará novamente atualizando seu contador
    i++ é a mesma coisa que i = i + 1
    i-- é a mesma coisa que i = i - 1
*/

for(let i = 1; i <= 10; i+=2) {
    console.log(`i = ${i}`);
}

/* 
    RODADA 1
    ---
    i = 0      
    i <= 10?    -> true / verdade
    i agora é   -> 1
*/

/* 
    RODADA 2
    ---
    i = 1        
    i <= 10?    -> true / verdadeiro
    i agora é   -> 2
*/
/* 
    RODADA 3
    ---
    i = 2        
    i <= 10?    -> true / verdadeiro
    i agora é   -> 3
*/
/* 
    RODADA 4
    ---
    i = 3        
    i <= 10?    -> true / verdadeiro
    i agora é   -> 4
*/
/* 
    RODADA 5
    ---
    i = 4        
    i <= 10?    -> true / verdadeiro
    i agora é   -> 5
*/
/* 
    RODADA 6
    ---
    i = 5        
    i <= 10?    -> true / verdadeiro
    i agora é   -> 6
*/
/* 
    RODADA 7
    ---
    i = 6        
    i <= 10?    -> true / verdadeiro
    i agora é   -> 7
*/
/* 
    RODADA 8
    ---
    i = 7        
    i <= 10?    -> true / verdadeiro
    i agora é   -> 8
*/
/* 
    RODADA 9
    ---
    i = 8        
    i <= 10?    -> true / verdadeiro
    i agora é   -> 9
*/
/* 
    RODADA 10
    ---
    i = 9        
    i <= 10?    -> true / verdadeiro
    i agora é   -> 10
*/
/* 
    RODADA 11
    ---
    i = 10        
    i <= 10?    -> true / verdadeiro
    i agora é   -> 11
*/
/* 
    RODADA 11
    ---
    i = 11        
    i <= 10?    -> false / falso
    i agora é   -> 
*/

// Podemos utilizar o contador da maneira que quisermos
// incrementando ou decrementando de 1 em 1, de 1000 em 1000
// ou de 0.1 em 0.1
for(let i = 0.1; i < 1; i+=0.1) {
    console.log(`i = ${i}`);
}