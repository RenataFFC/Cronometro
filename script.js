"use-strict"

var hun =0;
var hh = 0;
var mm =0;
var ss =0;
var tempo =10;
var crono =0;

function start(){
    crono = setInterval(() => {timer(); }, tempo);
}

function pause(){
    clearInterval(crono);
}

function stop(){
    clearInterval(crono);
     hun=0;
     hh=0;
     mm=0;
     ss=0;
    document.getElementById('counter').innerText = '0:00:00:00';
}
function timer(){
    hun++
    if(hun == 100){
        hun = 0;
        sec++;
        if (ss == 60){
            ss=0;
            min++
            if(mm ==60){
                mm = 0
             }
             h++
        }       
    }        
    var format = (hh) + ':' + (mm < 10 ? '0' + mm:mm) + ':' + (ss < 10 ? '0' + ss: ss) + ':' + (hun < 10 ? '0' + hun:hun)
    document.getElementById('counter').innerText = format
}
