/**
 * @author isaac
 */

const prompt = require('prompt-sync')()

//variaveis
let conta, consumo, tarifa 

console.clear()
console.log("")

//entrada
consumo = Number(prompt("Qual o consumo da energia"))
tarifa = Number(prompt("qual o valor da tarifa"))

//processamento
conta = consumo * tarifa

//saida 
console.log(`{o valor da conta sem impsoto é ${conta}`)