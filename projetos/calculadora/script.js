function criarCalculadora() {
  return {
    display: document.querySelector('.display'),
        
    
    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if( e.keyCode === 13){
          console.log(this)
          this.fazerConta();
        }
      })
    },

    cliqueBotoes(){
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
    },

    fazerConta(){
      try {
        this.display.value = eval(this.display.value)  
      } catch (error) {
        alert("conta invalida");
        console.log(error)
        return
      }
      
    },

    btnParaDisplay(valor) {
      this.display.value += valor
    },

    btnDelete() {
      this.display.value = this.display.value.slice(0,-1);
    },

    btnLimpar() {
      this.display.value = ''
    }

  };
}

const calculadora = criarCalculadora();
calculadora.inicia();