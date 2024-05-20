function final() {
    var number = parseInt(document.getElementById("num").value)
    var y = document.getElementById("loading")
    y.innerHTML = "PENSANDO......"
    y.style.fontSize = "50px"
    y.style.fontFamily = "Honk"
    setTimeout(() => {
    y.remove()
    var x = document.getElementById("final")
    x.innerText = `O número pensado foi: ${number}`
    x.style.fontSize = "50px"
    x.style.fontFamily = "Honk"
    var image = document.createElement("img")
    image.src = "https://media.tenor.com/FuAsxNcsk24AAAAM/kiss.gif"
    document.body.appendChild(image)
    }, 3000)
}
function amor(){
    var mor = window.prompt('Quem ama mais o outro???? \n1-Para Leo 2-Para Carol')
    if (mor == 1){
        window.alert ('ISSO MESMO VC TA CERTA TE AMO MAIS!!')
        document.location.href = "002.html"
    }
    else{
        window.alert('OWNNNNNNNNNNNNNNN VOU TE ENCHER DE BEIJOS MUITO')
        document.location.href = "002.html"
    }
}