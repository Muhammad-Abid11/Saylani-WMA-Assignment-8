var min=00;
var sec=00;
var msec=00;
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var interval;


function changeColor(msec,sec,min)
{
  document.getElementById(msec).style.color = "black"; // forecolor
}

function timer(){
    msec++;
    msecHeading.innerHTML=msec;
    if(msec>=100){
        sec++;
        secHeading.innerHTML=sec;
        msec=00;
    }
    else if(sec>=60){
        min++;
        minHeading.innerHTML=min;
        sec=00;
    }
}
function start(){
    document.getElementById("start-disable").disabled=true;    
    interval=setInterval(timer,10)
}
function stop(){
    document.getElementById("start-disable").disabled=false;
    clearInterval(interval);
    console.log(min,sec,msec);    
}
function reset(){
    stop();
    // minHeading.innerHTML=0;
    // secHeading.innerHTML=0;          also work
    // msecHeading.innerHTML=0;
    min=00;
    sec=00;
    msec=00;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    msecHeading.innerHTML=msec;
}