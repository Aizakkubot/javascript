/**
 * exemplo de uso da estrutura switch case 
 * @author isaac
 */
const prompt = require("prompt-sync")()

let opçao

 console.clear()
 console.log("menu de opçoes")
 console.log("")
 console.log("1 castro de clientes")
 console.log("2 castro de produtos")
 console.log("relatorios")
opçao = Number(prompt("digite a opção desejada: "))

//uso da estrutur da switch case para tratamento do valordigitando. 
// obs: esta estrutura aceita variaveis numericas do tipo numeros inteiros e caracteres unicos; dentro da estrutura o defailt e opcional

switch (opçao) {
    case 1:
        console.clear()
        console.log("tela de cadastro de produtos")
        break;
    case 2:
        console.clear()
        console.log("tela de casdastro de produtos")
        break;    
    case 3:
        console.clear()
        console.log("impressao de relatorios")
        break;
}
    