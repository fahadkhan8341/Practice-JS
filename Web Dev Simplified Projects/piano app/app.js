const keys = document.querySelectorAll('.key')

console.log(keys)
keys.forEach(key => {
    key.addEventListener('click', ()=>play(key))
})
document.addEventListener('keyup',(e)=>{
   let key = document.getElementById(e.key)
   if(key==null) return
   play(key)
})
function play(key) {
    let mp3 = document.getElementById(key.dataset.notes)
    mp3.currentTime=0;
    mp3.play();
    if(key.className.split(' ')[1] == 'white') {
      key.classList.add('whiteActive')
      mp3.addEventListener('ended',()=>key.classList.remove('whiteActive'))
 } else {
      key.classList.add('blackActive')
      mp3.addEventListener('ended',()=>key.classList.remove('blackActive'))
 }
}
