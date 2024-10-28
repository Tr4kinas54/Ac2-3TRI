let numeros = [1.2, 3.7, 4.5, 6.1, 8.9];
let numeros1 = [];

numeros.forEach(function(numero){
    numeros=Math.ceil(numero)
    numeros1.push(numero)
})
console.log(numeros1)
