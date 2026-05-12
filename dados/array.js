/**
 * estrutura de dados = array(vetor)
 * @author isaac
 */

console.clear()
console.log("----------------- ARRAY -------------------")

let alunos = ["vitor", "tania", "pedro", "maria", "vivi", "ana"]

console.log (`um array é do tipo: ${typeof(alunos)}`)

//obtendo o tamanho do arrey
console.log(`tamanho do array: ${alunos.length}`)

//adiconando dados em um array com (CRUD Create)

console.log("")
console.log("CRUD Create=============")
alunos.push("jorge") // o metodo push() faz de forma segura um dado ao array
console.log(alunos)
console.log(`aluno [2]: ${alunos[2]}`)

//exibindo os dados de um array (CRUD Read)

console.log("CRUD Read==========")
console.log(alunos)
console.table(alunos)
console.log(`aluno [2]: ${alunos[2]}`)

// alterando dados do array (CRUD Update)
//usar o indice para alterar um dado do vetor

console.log("")
console.log("CRUD Update===========")
alunos[0] = "victor"
alunos[4] = "viviane"
console.table(alunos)

// excluindo dados de um array (CRUD Delete)

console.log("")
console.log("CRUD Delete========")
delete alunos[1] // delete exclui de forma segura um dado do array
console.table(alunos)
console.log(`tamanho do array: ${alunos.length}`)

//percorrendo um array
console.log("")
console.log("----------")
console.log("percorrendo um array")

//         [0][1][2][3][4][5]
let notas =[3, 8, 5, 9, 2, 7]
console.log(notas)
console.table(notas)

//percorrendo um array com uso do laço for

console.log("laço for")
for(let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

//simplificaçao do laço for (fortach)

console.log("")
console.log("laço forEach")
notas.forEach((notas) => {
    console.log(notas)
})

//manipulaçao e filtragem de dados de um array
console.log("")
console.log("------------------")
console.log("Manupulaçao e filtragem de dados")
console.log("")
console.log("exemplo 1: adicionar 1 ponto as notas dos alunos")
let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log( `notas originais: ${notas}`)
console.log( `notas atualizadas: ${notasAtualizadas}`)

console.log("")
console.log("exemplo 2: conversao de um sistema de notas(numeros) para letras(caracteres)")

/**
 * NA - Nao atendeu(nota < 5)
 * PA - Participante atendido (nota entre 5 e 7)
 * A = Atendeu (nota > 7)
 */
let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return "NA"
    } else if (nc > 7){
        return "A"
    } else {
        return "PA"
    }    

})
console.log("")
console.log(`notas oroginais: ${notas}`)
console.log(`notas convertidas: ${notasConvertidas}`)

//nova estrutura de dados
let alunosDC = [
    { 
   nome: "bruce",
    idade: 43,
    bolsista: false  
    },
    {
        nome: "clark",
        idade: 45,
        bolsista: false    
    },
    {   
        nome: "Diana",
        idade: 36,
        bolsista: false
    },
    {
        nome: "barry",
        idade: 23,
        bolsista: true
    }

]

console.log("")
console.log("estrutura de dados usando array")
console.log(alunosDC)
console.table(alunosDC)

//filtros
console.log("")
console.log("filtros: exemplo 1 alunos bolsistas")
console.log(alunosDC.filter((b) => {
    return b.bolsista === true
}))

console.log("")
console.log("filtros: exemplo 2 alunos com idade superior a 40")
console.log(alunosDC.filter((i) => {
    return i.idade > 40
}))

console.log("")
console.log("filtros: exemplo 3 ordenr os alunos")
let alunosOrdenados = [...alunosDC]
alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})

console.table(alunosOrdenados)
