// retornar os numero maiores que 10

const numeros = [1,10,34,6,9,80,44,9,55,3,5,0,22]

//a arrow function não precisa das {} nem a palavra return devido so ter uma linha
const numerosMaiores10 = numeros.filter(valor => valor > 10);


console.log(numerosMaiores10)

const pessoas = [
  {nome: "Luiz", idade: 62},
  {nome: "Maria", idade: 23},
  {nome: "Eduardo", idade: 55},
  {nome: "Letícia", idade: 19},
  {nome: "Rosana", idade: 32},
  {nome: "Wallace", idade: 47},
]

//reotnar as pessoas que tem o nome com 5 letras ou mais
const pessoasLetras = pessoas.filter(pessoa => pessoa.nome.length >= 5)
//console.log(pessoasLetras)

//retornar as pessoas com mais de 50 anos
const pessoasIdade = pessoas.filter(pessoa => pessoa.idade > 50)
//console.log(pessoasIdade)
//retornar as pessoas que o nome termine com a letra "a"
const pessoaComA = pessoas.filter(pessoa => pessoa.nome[pessoa.nome.length -1] == "a")
console.log(pessoaComA)