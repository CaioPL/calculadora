// const display = document.getElementById("resultado")
// console,log(display)

// display.value = "2*2"

const display = document.getElementById("resultado")

function inserirDisplay(valor){
    display.value += valor
}
function LimparDisplay(){
    display.value = ""
}

function calcular(){
    display.value = eval(display.value)
}