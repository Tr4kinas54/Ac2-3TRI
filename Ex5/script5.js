let numerosOriginais = [4, 5, 6];
let novosNumeros = [1, 2, 3];

novosNumeros.forEach(function(numeros){
    numerosOriginais.unshift(numeros)
})
console.log(numerosOriginais)