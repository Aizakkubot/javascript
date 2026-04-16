/**
 * calculo de tanque
 * @author isaac
 */
const color = require('colors')
const prompt = require('prompt-sync')()

//variaveis
let gasolina, alcool

console.clear()
console.log("calculo de tanque")

//entrada
gasolina = Number(prompt("preço da gasolina: "))
alcool = Number(prompt("preoço do alcool: "))

if (alcool < 0.7 * gasolina) {
 console.log("absteça com alcool".green)   
} else {
 console.log("absteça com gasolina".red)   
}
