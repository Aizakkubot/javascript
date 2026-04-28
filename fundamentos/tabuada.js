/**
 * estudo o laço for - tabuada
 * @author isaac
 */

const prompt = require ('prompt-sync')()

let tabuada

console.clear()
console.log("tabuada")

tabuada = Number(prompt("digite o valor da tabuada desejada"))

for (let i = 1; i < 11; i++){
    console.log(`${tabuada} x ${i} = ${tabuada * i}`)
}