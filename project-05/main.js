;
const getHour = document.getElementById("hour");
const getMinute = document.getElementById("minute");
const getSecond = document.getElementById("second");
const timeFormat = document.getElementById("time-format");

function time(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const getTime = hours + " " + minutes + " " + seconds;
    getHour.innerHTML = hours;
    getMinute.innerHTML = minutes;
    getSecond.innerHTML = seconds;

    if ( seconds < 10) {
        getSecond.innerHTML = "0" + seconds;
    }

    if (minutes < 10) {
        getMinute.innerHTML = "0" + minutes;
    }

    if(hours < 10) {
        getHour.innerHTML = "0" + hours;
    } else if(hours > 12){
        hours = hours - 12;
        getHour.innerHTML = hours;
        timeFormat.innerHTML = "PM";
        getHour.innerHTML = "0" + hours
    }

    // if(hours > 12) {
        
    // }
    return getTime
}
setInterval(() => {
    time();
}, 1000);




