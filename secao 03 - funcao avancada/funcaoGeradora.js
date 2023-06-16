function* geradoraNumeros(){
  yield 'valor 1';
  yield 'valor 2';
  yield 'valor 3';
  yield 'valor 4';
}

const g1 = geradoraNumeros();
let retorno = g1.next() 
while(!retorno.done){
  console.log(retorno);
  retorno = g1.next();
}
console.log("log final", retorno)

//gerador infinito
function* geradoraInfinita() {
  let i = 0
  while(true) {
    yield i;
    i++;
  }
}

const g2 = geradoraInfinita();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

//geradora dentro de outra geradora

function* geradora1(){
  yield 1;
  yield 2;
  yield 3;
}

function* geradora2(){
  yield* geradora1();
  yield 4;
  yield 5;
  yield 6;
}

const g3 = geradora2();

for(let valor of g3){
  console.log(valor);
}

function* geradoraFuncoes() {
  yield function() {
    console.log("y1")
  }
  yield function() {
    console.log("y2")
  }
  return function() {
    console.log("y3")
  }
  yield function() {
    console.log("y4")
  }

}

const g4 = geradoraFuncoes();

const func1 = g4.next().value;
func1();
const func2 = g4.next().value;
func2();
const func3 = g4.next().value;
func3();
try {
  const func4 = g4.next().value;
  func4(); // erro devido ao return na função geradora
} catch (error) {
 console.log("erro função 4", error) 
}