// Criando um array:
const marcaCarros = ["Ford", "Hyundai", "Fiat", "BMW", "Etios"];

// Adicionando elementos na ultima posição do array
marcaCarros[marcaCarros.length - 1] = "LisCar";
marcaCarros.push("Honda");
// console.log(marcaCarros);
// console.log(marcaCarros.sort());

/* 
    Aprendendo sobre o splice
*/
const massas = ["Lasanha", "Pizza", "Macarronada"]
console.log(massas);

// ["Lasanha", "Nhoque", "Pizza", "Macarronada"]
massas.splice(1, 0, "Nhoque");
console.log(massas);