// EJERCICIO 1
document.getElementById('obtenerDiaBtn').addEventListener('click', function() {
    // const fechaActual = new Date("2024-05-10");
    const fechaActual = new Date();
    let numeroDiaActual = fechaActual.getDay();
    
    console.log(numeroDiaActual);
    
    // Convertir el domingo (0) a 7
    if (numeroDiaActual === 0) {
        numeroDiaActual = 7;
    } else if (numeroDiaActual === 6) {
        numeroDiaActual = 0;
    } else {
        // numeroDiaActual += 1; solo funciona cuando se ingresa una fecha en especifico
    }
    console.log(numeroDiaActual);
    
    
    
    console.log(numeroDiaActual);
    const nombreDia = obtenerNombreDia(numeroDiaActual);
    document.getElementById('resultado').textContent = `Hoy es ${nombreDia}`;
});

function obtenerNombreDia(numeroDia) {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return diasSemana[numeroDia];
}
// EJERCICIO 2
document.getElementById('invertirBtn').addEventListener('click', function() {
    const inputTexto = document.getElementById('inputTexto').value;
    const textoInvertido = invertirTexto(inputTexto);
    document.getElementById('textoInvertido').textContent = textoInvertido;
});

function invertirTexto(texto) {
    return texto.split('').reverse().join('');
}
