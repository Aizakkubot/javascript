/**
 * estudo de estrutura de controle if else
 * calculo media
 * @author isaac
 */
const color = require('colors')
const prompt = require('prompt-sync')()

let nota1, nota2, media

console.clear()
console.log("calculo da media")

//entrada
nota1 = Number(prompt("digite a nota1: "))
nota2 = Number(prompt("digite a nota2: "))

//processamento
media = (nota1 + nota2) / 2

//saida 
console.log(`media: ${media.toFixed(1)}`)

// uso da estrutura if else para determinar se o aluno esta aprovado ou reprovado
if (media < 5) {
  console.log("REPROVADO".red)  
} else {
  console.log("APROVADO".green)    
}
