// =========================================
// SMART STOPWATCH
// =========================================

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById("milliseconds");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");

const lapList = document.getElementById("lapList");

// =========================================
// VARIABLES
// =========================================

let startTime = 0;
let elapsedTime = 0;
let interval = null;
let running = false;
let lapNumber = 0;

// =========================================
// UPDATE TIMER
// =========================================

function updateTimer() {

    elapsedTime = Date.now() - startTime;

    const hrs = Math.floor(elapsedTime / 3600000);
    const mins = Math.floor((elapsedTime % 3600000) / 60000);
    const secs = Math.floor((elapsedTime % 60000) / 1000);
    const millis = elapsedTime % 1000;

    hours.textContent = String(hrs).padStart(2, "0");
    minutes.textContent = String(mins).padStart(2, "0");
    seconds.textContent = String(secs).padStart(2, "0");
    milliseconds.textContent = String(millis).padStart(3, "0");

}

// =========================================
// START
// =========================================

startBtn.addEventListener("click", () => {

    if (running) return;

    running = true;

    startTime = Date.now() - elapsedTime;

    interval = setInterval(updateTimer, 10);

});

// =========================================
// PAUSE
// =========================================

pauseBtn.addEventListener("click", () => {

    if (!running) return;

    running = false;

    clearInterval(interval);

});

// =========================================
// RESET
// =========================================

resetBtn.addEventListener("click", () => {

    running = false;

    clearInterval(interval);

    elapsedTime = 0;

    lapNumber = 0;

    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    milliseconds.textContent = "000";

    lapList.innerHTML = "";

});

// =========================================
// LAP
// =========================================

lapBtn.addEventListener("click", () => {

    if (!running) return;

    lapNumber++;

    const li = document.createElement("li");

    li.innerHTML = `
        <span>Lap ${lapNumber}</span>
        <span>
            ${hours.textContent}:${minutes.textContent}:${seconds.textContent}.${milliseconds.textContent}
        </span>
    `;

    lapList.prepend(li);

});

// =========================================
// INITIAL STATE
// =========================================

hours.textContent = "00";
minutes.textContent = "00";
seconds.textContent = "00";
milliseconds.textContent = "000";