document.getElementById('configForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var numValues = parseInt(document.getElementById('numValues').value);
    generarTabla(numValues);
});

function generarTabla(numValues) {
    var tableContainer = document.getElementById('tableContainer');
    var tableHTML = '<table>';
    for (var i = 0; i < numValues; i++) {
        var randomValue = Math.floor(Math.random() * 100) + 1; // Genera valores aleatorios del 1 al 100
        tableHTML += '<tr><td>Valor ' + (i + 1) + ':</td><td>' + randomValue + '</td></tr>';
    }
    tableHTML += '</table>';
    tableContainer.innerHTML = tableHTML;
    document.getElementById('calculateButton').style.display = 'block';
}

document.getElementById('calculateButton').addEventListener('click', function() {
    var suma = 0;
    var tableRows = document.querySelectorAll('#tableContainer table tr td:nth-child(2)');
    tableRows.forEach(function(cell) {
        suma += parseInt(cell.textContent);
    });
    document.getElementById('suma').textContent = 'La suma de todos los valores es: ' + suma;
});