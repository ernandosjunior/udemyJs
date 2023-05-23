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

//mesmo não defenindo parametros na função, é possivel declara-los quando a função é criada com a palavra reservada function.

function funcaoSemParametros(){
    //variavel arguments recebe todos os parametros não declarados na criação da função
    console.log(arguments)
}
console.log("Exemplo de função passando parametro sem estar previsto na função( recuperado com a variavel arguments)")
funcaoSemParametros("parametro não declarado na função")

//valores não enviados serão inicializados como undefined
function maisParametrosQueArgumentos(a,b,c,d,e,f){
    console.log(a,b,c,d = 4,e,f) // d declarado com valor padrão caso não seja enviado pela função
}
maisParametrosQueArgumentos(1,2,3)

//parametro padrão no meio do caminho
function parametroMeioCaminho(a=1,b=2,c=3){
    console.log(a+b+c)
}
parametroMeioCaminho(10,undefined,30) //para utilizar o valor deb é necessario colocar undefined como argumento

function conta(operador, acumulador, ...numeros){ // rest operator deve ser o ultimo parametro da função
    console.log(operador,acumulador,numeros)
    for ( let numero of numeros){
        console.log(numero)
    }
}

conta("+", 0, 10,20,30,40,50,60) // o rest operator ... antes do parametro recebe todos os argumentos restantes.