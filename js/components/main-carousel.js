//1 acessar janela
//2 pegar HTML todo
//3 Pegar botão
//4 Saber que está sendo clicado 

//5 Acessar a Janela
//6 Pegar HTML todo
//7 Pegar o elements
//8 Mover o elements para direita

//9 

const btnRight = window.document.querySelector('.button-arrow.-right');
const btnLeft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
let pixels = 10;

btnRight.addEventListener('click', function() {
    pixels = pixels + 10;
    elements.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener('click', function() {
    pixels = pixels - 10;
    elements.style = `transform: translateX(${pixels}px)`;
});
