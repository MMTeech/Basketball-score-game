// read the saved value from localStorage
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
}

// theme toggle
let changeSwitcher = document.querySelector(".change-switcher");

function themeToggle() {
  let el = document.body;
  el.classList.toggle("light-theme");

  let theme = el.classList.contains("light-theme") ? "light" : "dark";
  localStorage.setItem("theme", theme);
}
changeSwitcher.addEventListener("click", themeToggle);

// get the dom elements for score buttons
let homeScore = document.querySelector(".home-score");
let guestScore = document.querySelector(".guest-score");

let homeScoreBtns = document.querySelector(".home-score-btns");
let guestScoreBtns = document.querySelector(".guest-score-btns");

// reusable function
function setupScoreHandler(buttonContainer, scoreElement) {
  buttonContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      let value = Number(event.target.dataset.value);
      let currentScore = Number(scoreElement.textContent);

      scoreElement.textContent = currentScore + value;
    }
  });
}

// use the function for both sides
setupScoreHandler(homeScoreBtns, homeScore);
setupScoreHandler(guestScoreBtns, guestScore);

/**
 *   timer logic
 */

let totalSeconds = 5;
// We defined this timer ID to be able to stop the interval
let timerId = null;
let periodCounterValue = 0;
let periodCounterEl = document.querySelector(".period-counter");
let clockDsiplay = document.querySelector(".clock");
let pauseStartBtn = document.querySelector(".pause-start-btn");
let resetBtn = document.querySelector('.reset-btn');

pauseStartBtn.addEventListener("click", () => {
  if (timerId === null) {
    pauseStartBtn.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`;

    timerId = setInterval(() => {
      totalSeconds--;

      let min = Math.floor(totalSeconds / 60);
      let sec = totalSeconds % 60;

      sec = sec.toString().padStart(2, "0");

      clockDsiplay.innerText = `${min}:${sec}`;

      if (totalSeconds === 0) {
        clearInterval(timerId);
        timerId = null;
        periodCounterValue++;
        periodCounterEl.innerText = periodCounterValue;
        totalSeconds = 5;
        pauseStartBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
      }
    }, 1000);
  } else {
    // pause
    clearInterval(timerId);
    timerId = null;
    pauseStartBtn.innerHTML = `<i class="fa-solid fa-circle-play"></i>`;
  }
});
