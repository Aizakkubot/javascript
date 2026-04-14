/**
 * calculo o consumo medio de km/
 * @author isaac
 */

const prompt = require("prompt-sync")()

// variaveis
let d, l, c

console.clear()
console.log("Calcular o consumo medio de km")

//entrada
distancia = Number(prompt("Digite a distancia percorrido: "))
litros = Number(prompt("Digite a quantidade de combustivel em litros: "))
console.log("")

//processamento 
consumo = (distancia / litros)

console.clear()
console.log(`---------------------------`)
console.log(`O valor de é ${consumo}km/l`)