
document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var meetUrl = document.getElementById('meetUrl').value;
    var sessionCode = extraerCodigo(meetUrl);
    document.getElementById('sessionCode').textContent = "Código de la sesión: " + sessionCode;
});

function extraerCodigo(meetUrl) {
    // Expresión regular para extraer el código de sesión
    var regex = /(?:https?:\/\/)?meet\.google\.com\/([a-z0-9-]+)/i;
    var match = meetUrl.match(regex);
    if (match && match.length > 1) {
        return match[1].replace(/-/g, ''); // Eliminar guiones separadores
    } else {
        return "URL inválida. Por favor, ingrese una URL válida de Google Meet.";
    }
}