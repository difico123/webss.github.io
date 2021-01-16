const day = document.getElementById("days");
const hour = document.getElementById("hours");
const minute = document.getElementById("mins");
const secondt = document.getElementById("seconds");
const write = document.getElementById("writehere");
const getclass = document.getElementsByClassName("col");

const newYears = "12 Feb 2021";

function countdown() {
    const newYearDate = new Date(newYears);
    const currenDate = new Date();
    const second = (newYearDate - currenDate) / 1000;

    const days = Math.floor(second / 86400);
    const hours = Math.floor(second / 3600) % 24;
    const mins = Math.floor(second / 60) % 60;
    const seconds = Math.floor(second) % 60;

    day.innerHTML = formatTime(days);
    hour.innerHTML = formatTime(hours);
    minute.innerHTML = formatTime(mins);
    secondt.innerHTML = formatTime(seconds);
    if (mins == 11) {
        write.innerHTML = "19 minutes";
    } else {
        write.innerHTML = "other";
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);