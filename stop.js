let stopwatch;
let elapsedSeconds = 0;
let isRunning = false;

function updateStopwatchDisplay() {
  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;

  document.getElementById('stopwatch').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStopwatch() {
  if (!isRunning) {
    stopwatch = setInterval(() => {
      elapsedSeconds++;
      updateStopwatchDisplay();
    }, 1000);
    isRunning = true;
    document.getElementById('startBtn').textContent = 'Pause';
  } else {
    stopStopwatch();
  }
}

function stopStopwatch() {
  clearInterval(stopwatch);
  isRunning = false;
  document.getElementById('startBtn').textContent = 'Resume';
}

function resetStopwatch() {
  clearInterval(stopwatch);
  elapsedSeconds = 0;
  isRunning = false;
  updateStopwatchDisplay();
  document.getElementById('startBtn').textContent = 'Start';
}

updateStopwatchDisplay(); // Initial display
