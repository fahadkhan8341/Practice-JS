let imgCircle=document.querySelector('.imgCircle')
let whiteCircles=document.querySelectorAll('.whiteCircle')

imgCircle.addEventListener('dragstart',(e)=>{
    console.log('drag started');
    e.target.className+= ' hold'
    setTimeout(()=>{
        e.target.className='hide'
    },0)
})
imgCircle.addEventListener('dragend',(e)=>{
    console.log('drag ended');
    e.target.className='imgCircle'
})

for (whiteCircle of whiteCircles){
    whiteCircle.addEventListener('dragenter',(e)=>{
        console.log('drag enter triggered');
        
    })
    whiteCircle.addEventListener('dragleave',(e)=>{
        console.log('drag leave tiggered');
        e.target.className='whiteCircle'
    })
    whiteCircle.addEventListener('dragover',(e)=>{
        console.log('drag over triggered');
        e.preventDefault()
    })
    whiteCircle.addEventListener('drop',(e)=>{
        console.log('drop driggered');
        e.target.append(imgCircle)
    })
}