// EJERCICIO 6.1
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

// EJERCICIO 6.2
function calcular() {
    var arg1 = parseInt(document.getElementById('input1').value);
    var arg2 = parseInt(document.getElementById('input2').value);
    var operador = document.getElementById('operator').value;
    var resultado;

    switch (operador) {
        case 'suma':
            resultado = arg1 + arg2;
            break;
        case 'resta':
            resultado = arg1 - arg2;
            break;
        case 'multiplicacion':
            resultado = arg1 * arg2;
            break;
        case 'division':
            resultado = arg1 / arg2;
            break;
        case 'and':
            resultado = arg1 && arg2;
            break;
        case 'or':
            resultado = arg1 || arg2;
            break;
        case 'xor':
            resultado = arg1 ^ arg2;
            break;
        case 'not':
            resultado = ~arg1;
            break;
        case 'leftShift':
            resultado = arg1 << arg2;
            break;
        case 'rightShift':
            resultado = arg1 >> arg2;
            break;
        default:
            resultado = "Operador no válido";
    }

    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}