/**
 * @author isaac
 */

const prompt = require("prompt-sync")()

//variaveis
let comprimento, largura, altura, volume

console.clear()
console.log("calculo em litros")
console.log("")

//entrada
comprimento = Number(prompt("digite o comprimento do aquario:"))
largura = Number(prompt("digite a largura do aquario:"))
altura = Number(prompt("digite a altura do aquario:"))

//precessamento
volume = (comprimento * largura * altura) / 1000

//saida
console.log(`o resultado do volume é ${volume}`)