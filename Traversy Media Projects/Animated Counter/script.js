const counters=document.querySelectorAll('.counter')
const speed=200;

counters.forEach(counter=>{
    const updateCounter= ()=>{
        const target= +counter.getAttribute('data-target')
        const count=+counter.textContent;
        const increment=target/speed;

        if(count<target){
            counter.textContent=Math.ceil(count+increment);
            setTimeout(updateCounter,10)
        } else{
            counter.textContent=target
        }
    }
    updateCounter()
})