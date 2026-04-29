/**
 * sorteio de uma carta
 * exemplo de uso de array para simplificar o codigo
 * @author isaac
 */

const prompt = require('prompt-sync')()

//           [0]  [1] [2]  [3] 
let nipes = ["♠","♥", "♦", "♣"] 
//
let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] ,novojogo = "n"

do{
console.clear()
console.log("sorteio de uma carta ♠ ♥ ♦ ♣ ")
prompt("prescione a tecla enter para sortear uma carta")

let nipe = nipes [Math.floor(Math.random() * 4)] // 0 1 2 3
let face = faces [Math.floor(Math.random() * 13)] // 0 1 ...12

console.log(`${face} ${nipe}`)
novojogo = prompt("deseja jogar novamente(s/n): ")
} while (novojogo === "s" || novojogo === "S")