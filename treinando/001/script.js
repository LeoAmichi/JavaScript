function calculo(){
    var link = document.getElementById("link")
    var saida = document.getElementById("contador");
    let num = Number(document.getElementById("number").value);
    let numInicial = 0
    let intervalo = setInterval(function(){
        if(numInicial <= num){
            saida.innerHTML = `<p class="girar">${numInicial}</p>`;
            numInicial++;
        } else {
            saida.innerHTML = "A contagem chegou ao fim. Por favor tenha funcionado essa porra"
            var image = document.createElement("img")
            image.src = "https://www.icegif.com/wp-content/uploads/2023/09/icegif-428.gif"
            document.getElementById("imagem").appendChild(image)
            document.getElementById("saudades").innerHTML = "ps: eu sem meu amor"
            clearInterval(intervalo);
            link.style.display = "block"
        }
    }, 1000);}