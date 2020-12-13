const boxes = document.querySelectorAll('.box');
const dragableBoxContainer = document.querySelector('.dragable-box-container')
const scoreContainer = document.querySelector('.score')
const title = document.querySelector('.title')
const resetBtn=document.querySelector('.reset')
const correctSound =  document.getElementById('correct');
const wrongSound = document.getElementById('wrong')
const colors = ['#f08080', '#90ee90', '#20b2aa', '#ffb6c1', '#87cefa'];
let numbers = [];
let newBox = document.createElement('div');
let score = 0;

for (i = 0; i < boxes.length; i++) {
    numbers.push(i);
}
let random = shuffle(numbers);

window.addEventListener('DOMContentLoaded', startGame)

newBox.addEventListener('dragstart', dragStart)
newBox.addEventListener('dragend', dragEnd)

resetBtn.addEventListener('click',()=>{
    if(confirm("Press 'OK' if you want to reset the score ?")) {
    score=0;
    scoreContainer.textContent=0
    localStorage.removeItem('score')
    }
})

for (box of boxes) {
    box.addEventListener('dragover', dragOver)
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className += ' invisible', 0)
}

function dragEnd() {
    this.className = 'dragable-box'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'box'
}

function dragDrop() {
    this.className = 'box'
    this.append(newBox)
    this.style.borderWidth = 0;
    random = shuffle(numbers);
    let currentBox = this.style.borderColor
    updateScore(currentBox)
    setTimeout(() => startGame(), 500)
}



function startGame() {

    newBox.className = 'dragable-box';
    newBox.setAttribute('draggable', true)
    dragableBoxContainer.append(newBox)
    let randomBg = Math.floor(Math.random() * colors.length)
    newBox.style.backgroundColor = colors[randomBg];
    title.style.color = colors[randomBg]
    for (i = 0; i < boxes.length; i++) {
        boxes[i].style.border = `5px solid ${colors[numbers[i]]}`
        //    boxes[i].style.boxShadow=`0px 0px 2px 5px ${colors[numbers[i]]}`
    }
}    

score=localStorage.getItem('score')
scoreContainer.textContent=score;


function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function updateScore(currentBox) {
    let userBox = newBox.style.backgroundColor;
    if (currentBox == userBox) {
        score++;
        scoreContainer.textContent = score;
        localStorage.setItem('score', score);
        correctSound.currentTime = 0;
        correctSound.play()
    } else {
        score--;
        scoreContainer.textContent = score;
        localStorage.setItem('score', score);
        wrongSound.currentTime = 0;
        wrongSound.play()
    }
}
console.log(random)