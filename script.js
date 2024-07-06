// script.js

let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const stopBtn = document.getElementById('stopBtn');

function updateDisplay() {
   let h = hours < 10 ? '0' + hours : hours;
   let m = minutes < 10 ? '0' + minutes : minutes;
   let s = seconds < 10 ? '0' + seconds : seconds;
   let ms = milliseconds < 10 ? '0' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;
   display.textContent = `${h}:${m}:${s}:${ms}`;
}

function startTimer() {
   if (!isRunning) {
      isRunning = true;
      timer = setInterval(() => {
         milliseconds += 10;
         if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds++;
         }
         if (seconds >= 60) {
            seconds = 0;
            minutes++;
         }
         if (minutes >= 60) {
            minutes = 0;
            hours++;
         }
         updateDisplay();
      }, 10);
   }
}

function stopTimer() {
   clearInterval(timer);
   isRunning = false;
}

function resetTimer() {
   clearInterval(timer);
   isRunning = false;
   hours = 0;
   minutes = 0;
   seconds = 0;
   milliseconds = 0;
   updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize display
updateDisplay();
