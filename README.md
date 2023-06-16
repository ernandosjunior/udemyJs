# Curso de JavaScript e TypeScript do básico ao avançado
# Professor Luiz Otávio Miranda
Sobre este curso
Javascript e TypeScript - front-end e back-end (Full Stack) - Node, Express, noSQL, React, hooks, Redux, Design Patterns

Informações Importantes
- na criação de um objeto quando se utiliza de arrow functions a palavra reservada this sempre vai apontar para o objeto criado, caso contrario o this vai apontar para o objeto que esta chamando. exemplo:
criarCalculadora() {
  
  document.addEventListener("click", function (e) {
    const el = e.target;
    this.btnClick(); // this está se referindo ao document

  });


},

criarCalculadora() {
  
  document.addEventListener("click", (e) => {
    const el = e.target;
    this.btnClick(); // this está se referindo a criarCalculadora

  });


},