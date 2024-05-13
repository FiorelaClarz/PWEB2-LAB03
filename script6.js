
function cambiarTamaño(tamaño) {
    document.getElementById('texto').style.fontSize = tamaño + 'px';
}

// Aplicar estilo de foco cuando se presiona un botón
var botones = document.getElementsByTagName("button");
for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("mousedown", function() {
        this.style.boxShadow = "none";
    });
    botones[i].addEventListener("mouseup", function() {
        this.blur();
    });
}

// Función para cambiar el color del texto
function cambiarColor(color) {
    document.getElementById('texto').style.color = color;
}