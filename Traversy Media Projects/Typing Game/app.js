const words = ["copper", "pop", "gregarious", "aquarium", "stand", "hell", "shareholder", "brick", "outline", "border", "deviation", "wrestle", "moment", "celebration", "landscape", "suggest", "dump", "relationship", "reason", "cottage", "opinion", "copyright", "rank", "creation", "ecstasy", "advantage", "specimen", "frank", "bread", "marsh", "curl", "complex", "choose", "adviser", "promotion", "canvas", "hunting", "declaration", "oil", "collar", "burial", "club", "dialect", "treatment", "welfare", "reject", "knee", "origin", "theft", "era"];

const container = document.querySelector('.container')
const currentWord = document.querySelector('.currentText')
const inputField = document.querySelector('.input')
const scoreContainer = document.querySelector('.score')
const timeLeftContainer = document.querySelector('.timeLeft')
const highScoreContainer = document.querySelector('.highScore')
const match = document.querySelector('.match')
const audios = document.querySelectorAll('audio')
const levels = document.querySelectorAll('.levels')

let score = 0;
let timeLeft = 5;
let lastIndex;
let timer;
let highScore = 0;
let gameLevel = 5;

window.addEventListener('load', init)
inputField.addEventListener('keyup', startGame)
window.addEventListener('load', () => {
    highScore = localStorage.getItem('highScore')
    highScoreContainer.innerHTML = highScore
    levels[0].value = '5'
})

levels.forEach(level => {
    level.addEventListener('change', () => {
        gameLevel = level.value;
    })
})


function init() {
    inputField.value = ''
    let wordIndex = random()
    if (wordIndex == lastIndex) {
        wordIndex = random()
    }
    currentWord.innerHTML = words[wordIndex]
    lastIndex = wordIndex

}

function random() {
    return Math.floor(Math.random() * words.length)
}

function startGame(e) {
    if (e.keyCode === 13) {
        inputField.value = inputField.value.toLowerCase()
        if (inputField.value === currentWord.innerHTML) {
            clearInterval(timer)
            timeLeft = gameLevel;
            container.style.animation = '';
            startTimer()
            timer = setInterval(startTimer, 1000)
            init()
            updateScore()
            inputField.value = ''
            match.innerHTML = showMatch('success', 'Correct Match')
            audios[0].currentTime = 0;
            audios[0].play()
        } else {
            match.innerHTML = showMatch('warning', 'Wrong Match')
            audios[1].currentTime = 0;
            audios[1].play()
        }
    }
}

function startTimer() {
    if (timeLeft == 0) {

        clearInterval(timer)

        if (score > highScore) {
            highScore = score;
            highScoreContainer.innerHTML = highScore
            localStorage.setItem('highScore', highScore)
        }
        score = 0;
        match.innerHTML = showMatch('danger', 'Game Over')
        container.style.animation = "shake .7s forwards ease-out"
        audios[2].play()
    }
    timeLeftContainer.innerHTML = timeLeft;
    timeLeft--;

}

function updateScore() {
    score++;
    scoreContainer.innerHTML = score;
}

function showMatch(color, match) {
    return `<i class="text-${color}">${match}</i>`
}