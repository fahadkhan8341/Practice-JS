const nextBtn=document.querySelector('#next')
const prevBtn=document.querySelector('#prev')
const sliders=document.querySelectorAll('.slide')

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
    nextSlide()
})

prevBtn.addEventListener('click',e=>{
    prevSlide()
})
