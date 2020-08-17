const inputArea = document.getElementById('inputArea')
const outputArea = document.getElementById('outputArea')
const convertBtn = document.getElementById('convert')
const clearBtn = document.getElementById('clear')
const copyBtn = document.querySelector('#copy')

convertBtn.addEventListener('click', convert)
clearBtn.addEventListener('click', clearAll)
window.addEventListener('DOMContentLoaded', clearAll)
copyBtn.addEventListener('click', copyArray)


function convert() {
    if (inputArea.value !== '') {
        let array = inputArea.value.split(' ')
        for (i = 0; i < array.length; i++) {
            array[i] = ` '${array[i]}'`
        }
        array = `[ ${array} ]`
        console.log(array)
        outputArea.value = array
    }
}

function clearAll() {
    inputArea.value = ''
    outputArea.value = ''
}

function copyArray() {
    outputArea.select()
    document.execCommand('copy')
    copyBtn.textContent = 'copied'
    setTimeout(() => copyBtn.textContent = 'copy', 3000)
}