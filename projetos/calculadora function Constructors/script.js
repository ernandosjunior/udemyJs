function Calculadora(){
  this.display = document.querySelector('.display');
  
  this.iniciar = function() {
    this.cliqueBotoes();
    this.pressionaEnter();
  };
  this.pressionaEnter = function() {
    this.display.addEventListener('keyup', e => {
      if( e.keyCode === 13){
        this.fazerConta();
      }
    })
  };
  this.cliqueBotoes = function(){
    document.addEventListener('click', function(e){
      const el = e.target;

      if(el.classList.contains('btn-num')){
        this.btnParaDisplay(el.innerHTML);
      }
      if(el.classList.contains('btn-del')){
        this.btnDelete();
      }
      if(el.classList.contains('btn-clear')){
        this.btnLimpar();
      }
      if(el.classList.contains('btn-eq')){
        this.fazerConta();
      }
      this.display.focus();
    }.bind(this));
  };
  this.btnParaDisplay = function(valor) {
    this.display.value += valor
  };

  this.btnDelete = function() {
    this.display.value = this.display.value.slice(0,-1);
  };

  this.btnLimpar = function() {
    this.display.value = ''
  };

  this.fazerConta = function(){
    try {
      const conta = eval(this.display.value)
      this.display.value = conta  
    } catch (error) {
      alert("conta invalida");
      console.log(error)
      return
    };
  };


}
const calculadora = new Calculadora();
calculadora.iniciar();