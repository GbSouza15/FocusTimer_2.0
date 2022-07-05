const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddMinutes = document.querySelector('.addminutes')
const buttonRemoveMinutes = document.querySelector('.removeminutes')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeeshop')
const buttonFirePlace = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const forest = new Audio('./sound/Floresta.wav')
const rain = new Audio('./sound/Chuva.wav')
const coffeeshop = new Audio('./sound/Cafeteria.wav')
const fireplace = new Audio('./sound/Lareira.wav')
let minutes = Number(minutesDisplay.textContent)
let addtimer = Number(minutes.textContent)
let timerTimerOut

function audioForestPause() {
  forest.pause()
}
function audioForestPlay() {
  forest.play()
}
function audioRainPlay() {
  rain.play()
}
function audioRainPause() {
  rain.pause()
}
function audioCoffeshopPlay() {
  coffeeshop.play()
}
function audioCoffeshopPause() {
  coffeeshop.pause()
}
function audioFireplacePlay() {
  fireplace.play()
}
function audioFireplacePause() {
  fireplace.pause()
}

function addTimer() {
  minutes = Number(minutes) + 5
  updateTimerDisplay(minutes, 0)
}

function removeTimer() {
  if (minutes > 0) {
    minutes = Number(minutes) - 5
    updateTimerDisplay(minutes, 0)
  }
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimerOut)
}
function contador() {
  timerTimerOut = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      resetTimer()
      return
    }
    if (seconds <= 0) {
      seconds = 60

      --minutes
    }
    updateTimerDisplay(minutes, String(seconds - 1))

    contador()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  //minutes = prompt('Quantos minutos?') || 00
  //minutesDisplay.textContent = minutes
  contador()
})

buttonStop.addEventListener('click', function () {
  resetTimer()
})

buttonAddMinutes.addEventListener('click', function () {
  addTimer()
})

buttonRemoveMinutes.addEventListener('click', function () {
  removeTimer()
})

buttonForest.addEventListener('click', function () {
  buttonForest.classList.toggle('active')
  if (forest.paused == true) {
    forest.play()
  } else {
    forest.pause()
  }
})
buttonRain.addEventListener('click', function () {
  buttonRain.classList.toggle('active')
  if (rain.paused == true) {
    rain.play()
  } else {
    rain.pause()
  }
})
buttonCoffeeShop.addEventListener('click', function () {
  buttonCoffeeShop.classList.toggle('active')
  if (coffeeshop.paused == true) {
    coffeeshop.play()
  } else {
    coffeeshop.pause()
  }
})
buttonFirePlace.addEventListener('click', function () {
  buttonFirePlace.classList.toggle('active')
  if (fireplace.paused == true) {
    fireplace.play()
  } else {
    fireplace.pause()
  }
})
