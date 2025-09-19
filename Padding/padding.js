const bloco = document.getElementById("blocoManipulacao");

const paddingTop = document.getElementById("paddingTop");
const paddingRight = document.getElementById("paddingRight");
const paddingBottom = document.getElementById("paddingBottom");
const paddingLeft = document.getElementById("paddingLeft");


const valTop = document.getElementById("valTop");
const valRight = document.getElementById("valRight");
const valBottom = document.getElementById("valBottom");
const valLeft = document.getElementById("valLeft");

// Atualiza o padding
function atualizarPadding() {
    bloco.style.paddingTop = paddingTop.value + "px";
    bloco.style.paddingRight = paddingRight.value + "px";
    bloco.style.paddingBottom = paddingBottom.value + "px";
    bloco.style.paddingLeft = paddingLeft.value + "px";

    valTop.textContent = paddingTop.value + "px";
    valRight.textContent = paddingRight.value + "px";
    valBottom.textContent = paddingBottom.value + "px";
    valLeft.textContent = paddingLeft.value + "px";
}


[paddingTop, paddingRight, paddingBottom, paddingLeft].forEach(slider => {
    slider.addEventListener("input", atualizarPadding);
});

// Inicializa
atualizarPadding();