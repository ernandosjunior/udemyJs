const dados = []

let nome = document.querySelector("#nome");
let sobrenome = document.querySelector("#sobrenome");
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");

document.getElementById("enviar").addEventListener("click", function(event){
    event.preventDefault()
    if(nome.value.trim().length > 0){
        dados.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        
        nome.value = "";
        sobrenome.value = "";
        peso.value = "";
        altura.value = "";

        console.log(dados)
    }else{
        console.log("Digite seu nome")
    }
    
    
  });

