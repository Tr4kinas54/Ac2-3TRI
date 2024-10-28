let numeros = [2, 5, 8, 13, 16, 21];
let numeros1 = []

numeros.forEach(function (pegaCadaNumero) {
    let numeroAleatorio = ''
    if (pegaCadaNumero % 2 === 1){
        numeroAleatorio = Math.floor(Math.random() * 11)
        pegaCadaNumero=numeroAleatorio*pegaCadaNumero
        numeros1.push(pegaCadaNumero)
    }
    else{
    numeros1.push(pegaCadaNumero)
    }
    })
    console.log(numeros1)