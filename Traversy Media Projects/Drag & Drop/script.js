let fill = document.querySelector('.fill')
let empties= document.querySelectorAll('.empty')

fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend',dragEnd);

for(empty of empties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)
}

function dragStart(){
    fill.className+= ' hold'
    setTimeout(()=>fill.className+= ' invisible',0)
}

function dragEnd(){
    fill.className='fill'
}

function dragOver(e){    
    e.preventDefault()
    console.log('dragover');
}

function dragEnter(e){
    e.preventDefault()
    console.log('dragenter');
    
    this.className+=' hovered'
}

function dragLeave(){
    this.className='empty'
}

function dragDrop(){
    this.className='empty'
    this.append(fill)
}
