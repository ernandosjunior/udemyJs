const alunos = ["Ernando", "Thays", "Gustavo"]

alunos.push("Arthur") // adiciona um elemento no final do array

alunos.unshift("Elisa") // adiciona um elemento no começo do array

const removidoFinal = alunos.pop() // remove ultimo elemento do array e retorna o mesmo

const removidoInicio = alunos.shift() // remove primeiro elemento do array e retorna o mesmo

console.group(alunos instanceof Array) // verifica se a variavel é um array