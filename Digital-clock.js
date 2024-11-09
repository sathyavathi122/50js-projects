const hourE1=document.getElementById("hour");
const minutE1=document.getElementById("minuts");
const secondsE1=document.getElementById("seconds");
const ampm=document.getElementById("ampm");
function getdigitalclock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let am_pm="AM"
    if (h>12){
        h=h-12
        am_pm="PM"
        }
    h=h<10? "0"+h:h;
    m=m<10? "0"+m:m;
    s=s<10? "0"+s:s;
    minutE1.innerHTML=m
    secondsE1.innerHTML=s
    hourE1.innerHTML=h
    ampm.innerHTML=am_pm
    setTimeout(() => {
       getdigitalclock() 
    }, 1000);
}
getdigitalclock()