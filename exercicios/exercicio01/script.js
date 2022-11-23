let num1;
let num2;
do {
    num1 = window.prompt("digite primeiro número")
    num1 = Number(num1)
} while (isNaN(num1));
do {
    num2 = window.prompt("digite Segundo número")
    num2 = Number(num2)
} while (isNaN(num2));

let resultado = num1 + Number(num2)
window.confirm(`O resultado foi ${resultado}`)