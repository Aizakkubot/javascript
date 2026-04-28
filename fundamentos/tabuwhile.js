/**
 * estudo o laço for - tabuada
 * @author isaac
 */

const prompt = require ('prompt-sync')()

let tabuada
let i = 1

console.clear()
console.log("tabuada")

tabuada = Number(prompt("digite o valor da tabuada desejada"))


while (i < 11) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`)
    i++
}