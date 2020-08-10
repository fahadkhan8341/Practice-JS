const btn=document.querySelector('.btn')
const modalContainer=document.querySelector('.modal-container');
const closeBtn=document.getElementById('close')
const modalShow = ()=>{
    modalContainer.classList.toggle('showModal')
}
closeBtn.addEventListener('click',()=>{
    modalContainer.classList.remove('showModal')
})
btn.addEventListener('click',modalShow)

window.addEventListener('click',e=>{
    if(e.target.classList.contains('showModal')){
        modalContainer.classList.remove('showModal')
    }
})