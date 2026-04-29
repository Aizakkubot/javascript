/**
 * estudo das funçoes
 * @author isaac
 */

// funçao literal (simples)

function hello () {
    console.clear()
    console.log("hello function")
    console.log("tipo: " + typeof (hello)) //apoio ao entendimento da logica
}

// para executar uma funçao basta "chamar"  o nome da funçao, nao esquecendo dos parenteses
hello()

//funçao anonima >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const hello2 = function() {
    console.log("hello function assigned")
    console.log("tipo: " + typeof (hello2)) //apoio ao entendimento da logica
}

hello2()

//funçao anonima siplificada >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const hello3 = () => {
    console.log("hello arrow function assigned")
    console.log("tipo: " + typeof (hello3)) //apoio ao entendimento da logica   
}

hello3()

//funçao simples com parametros >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function somar(num1, num2) {
    console.log("tipo: " + typeof (hello3)) //apoio ao entendimento da logica
    return (console.log (num1 + num2))
}

//nesse caso dentro de paraenteses, fornecemos os numeros que serao somados na funçao
somar(2, 3)

//funçao anonima com parametros >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const somarA = function(num1, num2) {
    console.log ("tipo: " + typeof(somarA))
    return (console.log (num1 + num2))
}

somarA(6, 7)

//funçao anonima com parametros >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const somarAF = (num1, num2) => {
    console.log ("tipo: " + typeof(somarAF))
    return (console.log (num1 + num2))
}

somarAF(8, 8)

//funçao anonima super simplificada com parametros >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const somarAFS = (num1, num2) => (console.log (num1 + num2)) 

somarAFS(2, 7)