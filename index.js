let homeCounter = document.getElementById("home-score")
let guestCounter = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function homeAddOne() {
    homeScore += 1
    homeCounter.textContent = homeScore
}

function homeAddTwo() {
    homeScore += 2
    homeCounter.textContent = homeScore
}

function homeAddThree() {
    homeScore += 3
    homeCounter.textContent = homeScore
}

function guestAddOne() {
    guestScore += 1
    guestCounter.textContent = guestScore
}

function guestAddTwo() {
    guestScore += 2
    guestCounter.textContent = guestScore
}

function guestAddThree() {
    guestScore += 3
    guestCounter.textContent = guestScore
}

function reset() {
    guestScore = 0
    homeScore = 0
    guestCounter.textContent = guestScore
    homeCounter.textContent = homeScore
}