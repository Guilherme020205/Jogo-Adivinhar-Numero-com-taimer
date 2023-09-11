var sec = 0;
var interval;

var tempoDeJogoSec = 10;

function twoDigits(digit) {
    if (digit < 10) {
        return ('0' + digit)
    } else {
        return (digit)
    }
}
function start() {
    watch()
    interval = setInterval(watch, 1000);
}

function stop() {
    clearInterval(interval);
    sec = 0;
    document.getElementById('watch').innerText = "00";

}

//watch = relógio
function watch() {
    sec++

    if (sec == tempoDeJogoSec + 1) {
        alert("Fim de jogo")
        window.location.reload(true)
    }
    document.getElementById('watch').innerText = twoDigits(sec);

}


//***
const numeroDaSorte = Math.floor(Math.random() * 10) + 1;
console.log(numeroDaSorte)

function verificar(){

    

    return false; 
}