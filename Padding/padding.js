// Seleciona elementos
const box = document.getElementById("box");
const paddingTop = document.getElementById("paddingTop");
const paddingRight = document.getElementById("paddingRight");
const paddingBottom = document.getElementById("paddingBottom");
const paddingLeft = document.getElementById("paddingLeft");

// Atualiza padding em tempo real
paddingTop.addEventListener("input", () => {
    box.style.paddingTop = paddingTop.value + "px";
});

paddingRight.addEventListener("input", () => {
    box.style.paddingRight = paddingRight.value + "px";
});

paddingBottom.addEventListener("input", () => {
    box.style.paddingBottom = paddingBottom.value + "px";
});

paddingLeft.addEventListener("input", () => {
    box.style.paddingLeft = paddingLeft.value + "px";
});

