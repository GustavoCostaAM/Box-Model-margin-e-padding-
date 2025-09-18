//pega os itens html
const blocoManipulacao = document.querySelector('#blocoManipulacao')
const inputBorderStyle = document.querySelector('#Border-Style')
const inputBorderWidth = document.querySelector('#Border-Width')
const inputBorderColor = document.querySelector('#Border-Color')
const inputBorderRadius = document.querySelector('#Border-Radius')

//cria as funcoes
function mudarBorderStyle(elemento, valor){
    if (valor == '--Selecione'){
        elemento.style.borderStyle = null;
    }else{
        elemento.style.borderStyle = valor;
    }
}

function mudarBorderWidth(elemento, valor){
    elemento.style.borderWidth = valor + 'px';
}

function mudarBorderColor(elemento, valor){
    elemento.style.borderColor = valor;
}

function mudarBorderRadius(elemento, valor){
    elemento.style.borderRadius = valor + 'px';
}

//ativa as funcoes
inputBorderStyle.addEventListener('input', () => {
    mudarBorderStyle(blocoManipulacao, inputBorderStyle.value);
})

inputBorderWidth.addEventListener('input', () => {
    mudarBorderWidth(blocoManipulacao, inputBorderWidth.value);
})

inputBorderColor.addEventListener('input', () => {
    mudarBorderColor(blocoManipulacao, inputBorderColor.value);
})

inputBorderRadius.addEventListener('input' , () => {
    mudarBorderRadius(blocoManipulacao, inputBorderRadius.value);
})