/**
 * calculo da qauntidade de latas de tintas
 * @author isaac
 */
 
const prompt = require("prompt-sync")()

//variaveis
let latas, tamanhoParede, rendimentoLatas

console.clear()
console.log("calculo da quantidade de latas de tintas")
console.log("")

//entradas
rendimentoLatas = Number(prompt("digite o rendimento da lata em m2: "))
tamanhoParede = Number(prompt("digite o cumprimento da parede em m2): "))

//processamento
latas = rendimentoLatas / tamanhoParede

//saida
console.log(`a quantidade de ${latas}`)


