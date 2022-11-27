function soma(x=1, y=2){
    return x+y
}

console.log("com x e y", soma(3,5))
console.log("com x ", soma(3))
console.log("sem parametros", soma())

const raiz = function (n){
return n ** 0.5
};

console.log("função anônima atribuida a variavel:", raiz(9))

const potencia = (x,y) => {return x**y}

console.log("função anônima",potencia(3,3))

const potenciaQuadrado = n => n ** 2;

console.log("função anônima simplificada: ", potenciaQuadrado(2))