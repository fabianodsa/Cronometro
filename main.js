var horas = 0;
var minutos = 0;
var segundos = 0;
var cronometro;

function start() {
   cronometro = setInterval(() => {
    timer();
    }, 1000);
} 

function stop() {
    clearInterval(cronometro);
}

function reset() {
    clearInterval()

    horas = 0;
    minutos = 0;
    segundos = 0;

    document.getElementById("timer").innerHTML = "00:00:00";
}

function timer() {
    segundos++;

    if (segundos == 60){
        segundos = 0;
        minutos++;
    }
    if (minutos == 60) {
        minutos = 0;
        horas++;
    }

    var format = 
    (horas < 10 ? "0" + horas : horas) + 
    ":" + 
    (minutos < 10 ? "0" + minutos : minutos) +
    ":" + 
    (segundos < 10 ? "0" + segundos : segundos) 

    document.getElementById('timer').innerHTML = format;
}