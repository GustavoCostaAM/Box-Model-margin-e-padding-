const bloco = document.getElementById("blocoManipulacao");

// Sliders de Largura da Borda
const borderTop = document.getElementById("borderTop");
const borderRight = document.getElementById("borderRight");
const borderBottom = document.getElementById("borderBottom");
const borderLeft = document.getElementById("borderLeft");

// Spans dos valores da Largura
const valBorderTop = document.getElementById("valBorderTop");
const valBorderRight = document.getElementById("valBorderRight");
const valBorderBottom = document.getElementById("valBorderBottom");
const valBorderLeft = document.getElementById("valBorderLeft");

// Sliders de Arredondamento da Borda
const borderRadiusTopLeft = document.getElementById("borderRadiusTopLeft");
const borderRadiusTopRight = document.getElementById("borderRadiusTopRight");
const borderRadiusBottomLeft = document.getElementById("borderRadiusBottomLeft");
const borderRadiusBottomRight = document.getElementById("borderRadiusBottomRight");

// Spans dos valores de Arredondamento
const valBorderRadiusTopLeft = document.getElementById("valBorderRadiusTopLeft");
const valBorderRadiusTopRight = document.getElementById("valBorderRadiusTopRight");
const valBorderRadiusBottomLeft = document.getElementById("valBorderRadiusBottomLeft");
const valBorderRadiusBottomRight = document.getElementById("valBorderRadiusBottomRight");

// Controles de estilo e cor
const borderStyle = document.getElementById("borderStyle");
const borderColor = document.getElementById("borderColor");


// Atualiza todas as propriedades da borda
function atualizarBorder() {
    // Aplica as larguras da borda
    bloco.style.borderTopWidth = borderTop.value + "px";
    bloco.style.borderRightWidth = borderRight.value + "px";
    bloco.style.borderBottomWidth = borderBottom.value + "px";
    bloco.style.borderLeftWidth = borderLeft.value + "px";

    // Atualiza os textos dos valores de largura
    valBorderTop.textContent = borderTop.value + "px";
    valBorderRight.textContent = borderRight.value + "px";
    valBorderBottom.textContent = borderBottom.value + "px";
    valBorderLeft.textContent = borderLeft.value + "px";

    // Aplica os valores de arredondamento
    bloco.style.borderTopLeftRadius = borderRadiusTopLeft.value + "px";
    bloco.style.borderTopRightRadius = borderRadiusTopRight.value + "px";
    bloco.style.borderBottomLeftRadius = borderRadiusBottomLeft.value + "px";
    bloco.style.borderBottomRightRadius = borderRadiusBottomRight.value + "px";

    // Atualiza os textos dos valores de arredondamento
    valBorderRadiusTopLeft.textContent = borderRadiusTopLeft.value + "px";
    valBorderRadiusTopRight.textContent = borderRadiusTopRight.value + "px";
    valBorderRadiusBottomLeft.textContent = borderRadiusBottomLeft.value + "px";
    valBorderRadiusBottomRight.textContent = borderRadiusBottomRight.value + "px";

    // Aplica o estilo e a cor da borda
    bloco.style.borderStyle = borderStyle.value;
    bloco.style.borderColor = borderColor.value;
}

// Eventos de mudança para todos os sliders
const allSliders = [
    borderTop, borderRight, borderBottom, borderLeft,
    borderRadiusTopLeft, borderRadiusTopRight, borderRadiusBottomLeft, borderRadiusBottomRight
];

allSliders.forEach(slider => {
    slider.addEventListener("input", atualizarBorder);
});

// Eventos para o estilo e cor da borda
borderStyle.addEventListener("change", atualizarBorder);
borderColor.addEventListener("input", atualizarBorder);

// Inicializa com os valores padrão
atualizarBorder();