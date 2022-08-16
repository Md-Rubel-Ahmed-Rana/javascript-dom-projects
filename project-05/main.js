const getHour = document.getElementById("hour");
const getMinute = document.getElementById("minute");
const getSecond = document.getElementById("second");
let timeFormat = document.getElementById("time-format");


function time(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours > 12) {
      hours = hours - 12;
      timeFormat.innerText = "PM";
    } else{
      hours = hours
    }

    if (hours < 10 ) {
      hours = "0" + hours
    }
    
    if (minutes < 10 ) {
      minutes = "0" + minutes
    }

    if (seconds < 10 ) {
      seconds = "0" + seconds
    }
    
    getHour.innerText = hours;
    getMinute.innerText = minutes;
    getSecond.innerText = seconds;
}
setInterval(() => {
    time();
}, 1000);




