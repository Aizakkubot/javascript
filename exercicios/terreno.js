/**
 * calcule a area do terreno em metros
 * @author isaac
 */

const prompt = require("prompt-sync")()

//variaveis
let total, alturaparade, larguraparede

console.clear()
console.log("calcule a area dov terreno em metros")


//entrada
alturaparade = Number (prompt("digite a altura da parede:" ))
larguraparede = Number (prompt("digite a largura da parede:" ))
console.log()

//processamento
total = (alturaparade * larguraparede) / 0.02

console.clear()
console.log (`o total de tijolos é: ${total}` )