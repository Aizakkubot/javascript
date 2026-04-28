/**
 * @author isaac
 * 
 */
const prompt = require('prompt sync')()

//variaveis
let idade

console.clear()
console.log("calculo idade")

//entrada
idade = Number(prompt("digite sua idade:"))

if (idade  < 16 ) {
console.log ("proibido votar")     
} else if (idade  === 16 || idade === 17 || idade >70) {
console.log ("voto facultativo")
} else { 
console.log("obrigado a votar")      
}