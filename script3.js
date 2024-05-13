 // Fecha del día de Arequipa
 var diaDeArequipa = new Date("2024-08-15");
        
 // Función para calcular los días restantes
 function calcularDiasRestantes() {
     var hoy = new Date();
     var diferencia = diaDeArequipa.getTime() - hoy.getTime();
     var diasRestantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
     return diasRestantes;
 }
 
 // Mostrar los días restantes en la página
 function mostrarDiasRestantes() {
     var diasRestantes = calcularDiasRestantes();
     var countdownElement = document.getElementById("countdown");
     countdownElement.textContent = "Faltan " + diasRestantes + " días para el día de Arequipa!";
 }
 
 // Actualizar cada segundo
 setInterval(mostrarDiasRestantes, 1000);
 
 // Mostrar los días restantes al cargar la página
 mostrarDiasRestantes();