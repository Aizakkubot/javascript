/**
 * exercicio coversao de temperatura
 * @author isaac
 */

const prompt = require("prompt-sync")()

//variaveis
let c, f

console.clear()
console.log("coversao de temperatura fahrenheit -> celsius")

//entrada
f = Number(prompt("digite a temperatura em fahrenheit: "))

//processamento
c = (f - 32) * 5/9

console.log(`${f}° fahrenheit equivalem a ${c.toFixed(1)}° c `)