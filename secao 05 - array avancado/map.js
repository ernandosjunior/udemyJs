const numeros = [1,2,45,56,8,445,134,688,5,48,0,75,452,1]

const numerosDobro = numeros.map((valor) => valor*2 );
//console.log(numerosDobro);

const pessoas = [
  {nome: "Ernando", idade: 33},
  {nome: "Thays", idade: 32},
  {nome: "Gustavo", idade: 15},
  {nome: "Arthur", idade: 9},
  {nome: "elisa", idade: 6},
]

const pessoasComId = pessoas.map(function (obj,indice){
  const newObj = {...obj} // realizado o spread do obj para não modficar o objeto original
  newObj.indice = indice
  return newObj
});

console.log(pessoasComId)