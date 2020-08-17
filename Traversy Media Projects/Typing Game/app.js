const words = ["copper", "pop", "gregarious", "aquarium", "stand", "hell", "shareholder", "brick", "outline", "border", "deviation", "wrestle", "moment", "celebration", "landscape", "suggest", "dump", "relationship", "reason", "cottage", "opinion", "copyright", "rank", "creation", "ecstasy", "advantage", "specimen", "frank", "bread", "marsh", "curl", "complex", "choose", "adviser", "promotion", "canvas", "hunting", "declaration", "oil", "collar", "burial", "club", "dialect", "treatment", "welfare", "reject", "knee", "origin", "theft", "era"];

const currentWord = document.querySelector('.currentText')
const inputField = document.querySelector('.input')
const scoreContainer = document.querySelector('.score')
const timeLeftContainer=document.querySelector('.timeLeft')
const highScoreContainer=document.querySelector('.highScore')
const match=document.querySelector('.match')
let score = 0;
let timeLeft=5;
let lastIndex;
let timer;
let highScore=0;

window.addEventListener('load', init)
inputField.addEventListener('keyup', startGame)

highScore = localStorage.getItem('highScore')
highScoreContainer.innerHTML=highScore

function init() {
    inputField.value = ''
    let wordIndex= random()
    if(wordIndex==lastIndex){
        wordIndex=random()
    }
    currentWord.innerHTML = words[wordIndex]
    lastIndex=wordIndex
   
}

function random() {
    return Math.floor(Math.random() * words.length)
}

function startGame(e) {
    if (e.keyCode === 13) {
        if (inputField.value === currentWord.innerHTML) {
            clearInterval(timer)
            timeLeft=5
            startTimer()
            init()
            updateScore()
            inputField.value = ''
            match.innerHTML=showMatch('success','Correct Match')
        } else{
            match.innerHTML=showMatch('warning','Wrong Match')
        }
    }
}

function startTimer() {
   timer = setInterval(() => {

        if(timeLeft==-1){
            timeLeft=5
            clearInterval(timer)
            
            if(score>highScore){
                highScore=score;
                highScoreContainer.innerHTML=highScore
                localStorage.setItem('highScore',highScore)
            }
            score=0;
            match.innerHTML=showMatch('danger','Game Over')

        }
        timeLeftContainer.innerHTML=timeLeft;
        timeLeft--;
    }, 1000);
}

function updateScore() {
    score++;
    scoreContainer.innerHTML = score;
}

function showMatch(color,match){
    return `<i class="text-${color}">${match}</i>`
}