let segundos = 0;
let minutos = 0;


function segundo() {
    segundos++;
    if (segundos == 60) {
        minutos++;
        segundos = 0;
        document.getElementById('minuto').innerHTML = minutos
    }
    document.getElementById('segundo').innerHTML = segundos
}

setInterval(function() { segundo() }, 1000)



function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}