
let arr = []

let arrayEl = document.getElementById("array-el")
let inputEl = document.getElementById("input-el")
let btnAdd = document.getElementById("btn-add")


btnAdd.addEventListener('click', function() {

    let inputValue = inputEl.value.trim()
    let value 

// Adiciona ou não as áspas 
    if(isString(inputValue) == true) {
        value = `"${inputValue}"`
        console.log('String')
    } else {
        value = `${inputValue}`
        console.log("not a string")
    }

    arr.push(value)
    console.log(arr)
    arrayEl.innerHTML = arr
})


// Função para saber se é ou não uma string digitada no input
function isString(inputValue) {
    for(let digit in inputValue) {
        if (inputValue == "true" || inputValue == "false") {
            return false
        }
        else if (parseInt(inputValue[digit]) % 2 !== 1 && parseInt(inputValue[digit]) % 2 !== 0) {
            return true
        } else continue
}}