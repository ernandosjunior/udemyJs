function adicionarTexto(texto, divId){
    let divRoot = document.querySelector(`#${divId}`); 
    divRoot.innerHTML += texto
    divRoot.innerHTML += "<br>"
    divRoot.innerHTML += "<br>"
}

const retornoPrompt = window.prompt("Digiteum número:")

console.log(retornoPrompt)
if(isNaN(retornoPrompt.replace(",","."))){
    adicionarTexto("<h1>Não é um número</h1>", "root")
}else{
    const number = Number(retornoPrompt.replace(",","."))

    adicionarTexto(`<h1><strong>Seu número é: ${number}<strong></h1>`,"root")
    adicionarTexto(`Raiz quadrada: ${number ** 0.5}`,"root")
    adicionarTexto(`${number} é um inteiro: ${Number.isInteger(number)}`,"root")
    adicionarTexto(`Arredonda para baixo: ${Math.floor(number)}`,"root")
    adicionarTexto(`Arredonda para cima: ${Math.ceil(number)}`,"root")
    adicionarTexto(`com duas casas decimais: ${number.toFixed(2)}`,"root")
}