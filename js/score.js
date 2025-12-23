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




// get dom elements for timer
let clockDsiplay = document.querySelector('.clock'); // Display the clock
let period = document.querySelector('.period'); // period Indicator
let resetBtn = document.querySelector('.reset-btn');
let periodCounter = document.querySelector('.period-counter');

let totalSeconds = 12 * 60;
let timerId = null
let timerState = false;

function updateDisplay(){
    let minute = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    let second = Math.floor(totalSeconds % 60).toString().padStart(2, '0');

    clockDsiplay.textContent = `${minute}:${second}`;
}



