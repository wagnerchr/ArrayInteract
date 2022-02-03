
let arr = []

let arrayEl = document.getElementById("array-el")
let inputEl = document.getElementById("input-el")
let btnAdd = document.getElementById("btn-add")


btnAdd.addEventListener('click', function(e) {
    e.preventDefault()
    
    let inputValue = inputEl.value.trim()
   
    arr.push(inputValue)


// Adiciona ou não as áspas
    if(isString(inputValue) == true) {
        arrayEl.innerHTML += `"${arr}", `
        console.log('String')
    } else {
        arrayEl.innerHTML += `${arr}, `
        console.log("not a string")
    }
    arr = []
    inputEl.value = ""


  
    // for(let a in arr) {
    //     if (a == arr.length -1) {
    //         arrayEl.innerHTML += arr[a]
    //     } else {
    //         arrayEl.innerHTML += arr[a] + ", "
    //     }
    // }
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