const pinForm = document.getElementById('pinform')
pinForm.addEventListener('submit', getData)
let output = document.querySelector('.output')
let checkIcon = document.querySelector('.icon-check');
let removeIcon = document.querySelector('.icon-remove')
let pinInput = document.querySelector('.input')
pinInput.value = '';


document.querySelector('body').addEventListener('click', e => {
    if (e.target.classList.contains('clearAll')) {
        output.innerHTML = ''
        checkIcon.style.display = "none"
    }

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();


        if (output.childElementCount == 1) {
            output.innerHTML = ''
            checkIcon.style.display = "none"
        }
    }


})

function getData(e) {
    e.preventDefault()
    let pin = document.querySelector('.pin').value;


    fetch('https://api.postalpincode.in/pincode/' + pin)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data[0].Status !== 'Success') {
                showIcon('remove')
                document.querySelector('.output').innerHTML =
                    `<article class="message is-danger">
                <div class="message-body">Pin code is invalid. Please enter it correctly.</div>
            </article>`
            }
            else {
                showIcon('check')

                let output = '';
                data[0].PostOffice.forEach(place => {
                    output += `
            
            <article class="message is-primary">
            <div class="message-header">
              <p>Location : #${data[0].PostOffice.indexOf(place) + 1}</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              <ul>
              <li><strong>Place : </strong>${place.Name}</li>
              <li><strong>Area : </strong>${place.Region}</li>
              <li><strong>District : </strong>${place.District}</li>
              <li><strong>Circle : </strong>${place.Circle}</li>
              <li><strong>Division : </strong>${place.Division}</li>
              <li><strong>Pincode : </strong>${place.Pincode}</li>
              <li><strong>State : </strong>${place.State}</li>
              </ul>
            </div>
          </article>`;
                })
                document.querySelector('.output').innerHTML = `<div class="message count">
        <div class="message-header">
        <p>Locations found: #${data[0].PostOffice.length}</p>
        <button class="clearAll delete" aria-label="delete"></button>
        </div>
        </div>`;
                document.querySelector('.output').innerHTML += output;
            }
        })
}

function showIcon(icon) {

    document.querySelector('.icon-check').style.display = "none"
    document.querySelector('.icon-remove').style.display = "none"
    document.querySelector('.icon-' + icon).style.display = "inline-flex"
}


