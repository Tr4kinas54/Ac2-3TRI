let nome = prompt("Digite seu nome completo");
let numeros = nome.split("");
let contador = 0;

numeros.forEach(function(cadaLetra) {
    if(cadaLetra!=' '){
    contador++;
    }
   });
   console.log("Número de Letras:", contador);

