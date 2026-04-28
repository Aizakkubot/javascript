/**
 * jogo do dado
 * exemplo de uso da estrutura do while
 * @author isaac
 */

const prompt = require('prompt-sync')()
let novojogo = "n"

do{
    console.clear()
    console.log("jogo do dado")
    prompt ("digite {enter} para lançar o dado...")
    console.log(`face do dado: ${Math.ceil(Math.random() * 6)}`)
    novojogo = prompt("deseja jogar novamente(s/n): ")
} while (novojogo ==="s" || novojogo === "S")

