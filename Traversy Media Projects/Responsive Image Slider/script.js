const nextBtn=document.querySelector('#next')
const prevBtn=document.querySelector('#prev')
const sliders=document.querySelectorAll('.slide')
let clrLoop;

function nextSlide(){
    let current=document.querySelector('.current')
    current.classList.remove('current')
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current')
    } else{
        sliders[0].classList.add('current')
    }   
    
}
function prevSlide(){
    let current=document.querySelector('.current')
    current.classList.remove('current')
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current')
    } else{
        sliders[sliders.length-1].classList.add('current')
    }
}

nextBtn.addEventListener('click',e=>{
    clearInterval(clrLoop)
    nextSlide()
    slideLoop()
})

prevBtn.addEventListener('click',e=>{
    clearInterval(clrLoop)
    prevSlide()
    slideLoop()
})

function slideLoop(){
    clrLoop= setInterval(() => {
        nextSlide()
    }, 8000);
}
slideLoop()