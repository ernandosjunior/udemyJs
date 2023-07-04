const array = [2,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const total = array.reduce(function (acumulador,valor) {
  acumulador+= valor;
  return acumulador;
}, 120);//valor inicial do acumulador

console.log(total)

const somaImpares = array.reduce(function(acumulador,valor){
  if(valor % 2 !== 0){
    acumulador+= valor
  }
  return acumulador
}, 0)//caso não for setado o valor inicial do acumulador e o primeiro termo do array não passar na condição, o retorno estará incorreto.
console.log(`soma dos impares é igual a ${somaImpares}`)