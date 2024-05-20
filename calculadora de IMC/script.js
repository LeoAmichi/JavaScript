
function valor() {
    var peso, altura, imc
    peso = document.getElementById("peso").value
    altura = document.getElementById("altura").value
    imc = peso / (altura * altura)
    document.getElementById ("resultado").innerHTML = "IMC: " + imc
    
}
