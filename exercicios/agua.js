/**
 * @author
 */

const prompt = require('prompt-sync')()

//variaveis
let peso, kilo

console.clear()
console.log("calcule os litros")

//entrada 
peso = Number(prompt("qual seu peso"))

//processamento 
kilo = peso * 35

//saida
console.log(`seu consumo de agua diario é: ${kilo/1000}`)


