import "./assets/styles/style.scss";
import "remixicon/fonts/remixicon.css";
import toggleFullScreen from "./utils/fullscreen.js";
import favIcon from "./utils/favicon.js";

class Stopwatch {
  constructor() {
    this.stopwatchEvents = new StopwatchEvents();
  }

  initiateStopwatch() {
    this.stopwatchEvents.addEventListeners();
  }
}

class WatchMethods {
  constructor() {
    this.watch = document.querySelector(".watch");
    this.resetButton = document.querySelector(".reset");
    this.startButton = document.querySelector(".start");
    this.startTime = 0;
    this.elapsedTime = 0;
    this.timerInterval = null;
  }

  startWatch() {
    this.startTime = Date.now() - this.elapsedTime;
    this.timerInterval = setInterval(() => this.updateWatch(), 100);
    this.startButton.textContent = "Stop";
    this.startButton.onclick = () => this.stopWatch();
  }

  stopWatch() {
    clearInterval(this.timerInterval);
    this.elapsedTime = Date.now() - this.startTime;
    this.startButton.textContent = "Start";
    this.startButton.onclick = () => this.startWatch();
  }

  updateWatch() {
    this.elapsedTime = Date.now() - this.startTime;
    this.watch.textContent = TimeLogic.timeToString(this.elapsedTime);
  }

  resetWatch() {
    clearInterval(this.timerInterval);
    this.elapsedTime = 0;
    this.watch.textContent = "00:00:00";
    this.startButton.textContent = "Start";
    this.startButton.onclick = () => this.startWatch();
  }
}

class StopwatchEvents {
  constructor() {
    this.watchMethods = new WatchMethods();
  }

  addEventListeners() {
    const resetButton = document.querySelector(".reset");
    const startButton = document.querySelector(".start");

    startButton.onclick = () => this.watchMethods.startWatch();
    resetButton.onclick = () => this.watchMethods.resetWatch();
  }
}

class TimeLogic {
  constructor() {}

  static timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }
}
//Add FavIcon
favIcon("./assets/images/stopwatch.png");
//Fullscreen Toggle
toggleFullScreen();
//Initialize Stopwatch
const stopWatch = new Stopwatch();
stopWatch.initiateStopwatch();
