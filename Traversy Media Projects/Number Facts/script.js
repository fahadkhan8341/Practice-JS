let sendBtn=document.querySelector('.submit')
let numberInput =document.querySelector('#number')
let cardBody=document.querySelector('.card-body')
let fact=document.querySelector('.fact')
let factNumber=document.querySelector('.factNumber')
let radios=document.querySelectorAll('.radios input')
numberInput.value=''
let type=radios[0].value;
radios[0].checked=true;
let numberRegex=/^([0-9]){0,3}$/;
let finalRegex=numberRegex;
let yearRegex=/^([0-9]){3,4}$/
let dateRegex=/([0-9][0-9])\/([0-9][0-9])/;
let date;

radios.forEach((radio)=>{
    radio.addEventListener('change',()=>{
        numberInput.placeholder=`Enter any ${radio.value}`
        type=radio.value;
        if(type=='number'){
            numberInput.type="number"
            numberInput.value=''
            finalRegex=numberRegex
        } else if(type=='year'){
            numberInput.type="number"
            numberInput.value=''
            finalRegex=yearRegex
        } else{
            finalRegex=dateRegex
            numberInput.type="date"
            numberInput.value=''
            
        }
    })
})
// numberInput.addEventListener('input',getFactsAjax)
sendBtn.addEventListener('click',getFactsFetch)
numberInput.addEventListener('keyup',(e)=>{
    
    if(e.keyCode==13){
        
        getFactsFetch()
    }
})

// function getFactsAjax(){
//     let number = numberInput.value;
//     let xhr=new XMLHttpRequest()
//     xhr.open('GET',`http://numbersapi.com/${number}/year`);

//     xhr.onload = function(){
//         if(this.status==200 && number!=''){
//             fact.textContent=this.responseText;
//             factNumber.textContent=number;
//             cardBody.style.display="block"
//         }
//     }
//     xhr.send()
// }

function getFactsFetch(){
    let number=numberInput.value;
    date=number.split('')
    console.log(date);
    if(type=='number'){
        type=''
    }
    if(type=='date'){
        let day=date[8]+date[9]
        let month=date[5]+date[6]
        number=`${month}/${day}`
    }
    
    if(finalRegex.test(number)){
        fetch(`http://numbersapi.com/${number}/${type}`)
    .then(res=>res.text())
    .then(data=>{
        if(number!==''){
            fact.textContent=data;
            factNumber.textContent=number;
            cardBody.style.display="block"
        } else{
            cardBody.style.display="none"
        }
    })
    } else{
        alert('Please enter any valid Number! ');
        numberInput.value=''
    }
    
}