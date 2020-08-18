const container=document.querySelector('.container')
const text=document.querySelector('p')

const totalTime = 7500;
const breatheTime= (totalTime/5)*2;
const holdTime= totalTime/5;

breatheAnimation()
function breatheAnimation(){
    text.textContent='Breathe In !!!'
    container.className='container grow'

    setTimeout(()=>{
        text.innerHTML='Hold..'
        setTimeout(()=>{
            text.innerHTML='Breathe Out !!!'
            container.className='container shrink'
        },holdTime)

    },breatheTime)
}
setInterval(breatheAnimation,totalTime)
console.log('hey')