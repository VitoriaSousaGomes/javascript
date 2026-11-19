
console.log (`-----------------------------------------------------`)
console.log (`Exercício 1 — Lista de nomes`)

let nomes = ["Renata", "Junior", "Vilma", "Vitória", "Ray"]

console.log(`Mostrar o array completo no console: ${nomes}`)
console.log(`Mostrar o primeiro nome: ${nomes[0]}`)
console.log(`Mostrar o terceiro nome: ${nomes[2]}`)
console.log(`Mostrar o último nome: ${nomes[4]}`)
console.log(`Existem ${nomes.length} elementos dentro do array`)

console.log (`-----------------------------------------------------`)
console.log (`Exercício 2 — Lista de frutas`)

let frutas = ["Maça", "Banana", "Uva", "Morango"]
console.log(`Mostre todas as frutas: ${frutas}`)
frutas.push("Limão")
console.log(`Adicione uma fruta ao final do array: ${frutas}`)
frutas.sort()
console.log(`Organize as frutas em ordem alfabética: ${frutas}`)

console.log (`-----------------------------------------------------`)
console.log (`Exercício 3 — Encontrando elementos`)

let numeros = [10, 25, 30, 45, 50, 60]

console.log(`Verificar se o número 30 está presente: ${numeros.includes(30)}`)
console.log(`Verificar se o número 100 está presente: ${numeros.includes(100)}`)
console.log(`Descobrir a posição do número 45: ${numeros.indexOf(45)}`)
console.log(`Mostrar quantos números existem no array: ${numeros.length}`)

console.log (`-----------------------------------------------------`)
console.log (`Exercício 4 — Percorrendo um array`)

let alunos = ["Bruno", "Carla", "Denis", "Elis", "Fernanda"]

for (let pos in alunos) {
    console.log(`Aluno: ${alunos[pos]}`)
}

console.log (`-----------------------------------------------------`)
console.log (`Exercício 5 — Cadastro de notas`)

let notas1 = [10, 8, 4, 7, 9]

console.log(notas1)
let soma = 0
let media = 0

for(let pos=0; pos < notas1.length; pos++) {
    soma += notas1[pos]
}
console.log(`A soma das notas é ${soma}`)

media += soma/notas1.length
console.log(`A Média é ${media}`)


let maior = notas1[0] 
for(let pos=0; pos < notas1.length; pos++) {
    if(notas1[pos] > maior) {
        maior = notas1[pos]
    }
}

console.log(`A maior nota é ${maior}`)

let menor = notas1[0] 
for(let pos=0; pos < notas1.length; pos++) {
    if(notas1[pos] < menor) {
        menor = notas1[pos]
    }
}

console.log(`A menor nota é ${menor}`)



console.log (`-----------------------------------------------------`)
console.log (`Exercício 6 — Procurando um número`)

let valores = [8, 1, 7, 4, 2, 9]

console.log(`Procure onde está o número 7: ${valores.indexOf(7)}`)
console.log(`Procure onde está o número 4: ${valores.indexOf(4)}`)
console.log(`Procure onde está o número 10: ${valores.indexOf(10)}`)
console.log (`======================================================`)
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log (`-----------------------------------------------------`)
console.log (`Exercício 7 — Desafio: Boletim escolar`)

let Notas = [7.5, 9, 5.5, 8, 6]

for (let pos in Notas) {
    console.log(`Notas: ${Notas[pos]}`)
}

console.log(`Mostrar a quantidade de notas cadastradas: ${Notas.length}`)
Notas.push(3)

Notas.sort()
console.log(`Organizar as notas em ordem crescente: ${Notas}`)
console.log(`Mostrar a primeiro nota: ${Notas[0]}`)
console.log(`Mostrar a ultima nota: ${Notas[Notas.length - 1]}`) 