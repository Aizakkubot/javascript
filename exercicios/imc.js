/**
 * calculo imc
 * exemplo de encadeamento da estrutura
 * @author isaac
 */
const prompt = require('prompt-sync')()

let peso, altura, imc

console.clear()
console.log("calculo do imc")

peso = Number(prompt("digite o seu peso em kg: "))
altura = Number(prompt("digite sua altura em metros: "))

imc = peso / (altura * altura)

console.log(`imc: ${imc.toFixed(2)}`)

if (imc < 18.5) {
    console.log ("baixo peso")
} else if (imc < 25) {
    console.log ("acima do peso")
} else  if (imc < 30) {
    console.log ("sobre peso")
} else  if (imc < 35) {
    console.log ("obesidade grau 1")
} else if (imc < 40) {
    console.log ("obesidade grau 2")
} else {
    console.log ("obesidade grau 3")    
}