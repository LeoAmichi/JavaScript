
function Soma() {
    var e1 = parseInt(document.getElementById("v1").value);
    var e2 = parseInt(document.getElementById("v2").value);
    var res = document.getElementById("res");
    if (isNaN(e1) || isNaN(e2))
    {
       res.innerHTML = "Operação Inválida"
    }
    else{
        res.innerHTML = "Resposta: " + (e1 + e2);
    }
}
function Subt() {
    var e1 = parseInt(document.getElementById("v1").value);
    var e2 = parseInt(document.getElementById("v2").value);
    var res = document.getElementById("res");
    if (isNaN(e1) || isNaN(e2))
    {
       res.innerHTML = "Operação Inválida"
    }
    else{
        res.innerHTML = "Resposta: " + (e1 - e2);
    }
}
function Div() {
    var e1 = parseInt(document.getElementById("v1").value);
    var e2 = parseInt(document.getElementById("v2").value);
    var res = document.getElementById("res");
    if (isNaN(e1) || isNaN(e2))
    {
       res.innerHTML = "Operação Inválida"
    }
    else{
        res.innerHTML = "Resposta: " + (e1 / e2);
    }
}
function Mult() {
    var e1 = parseInt(document.getElementById("v1").value);
    var e2 = parseInt(document.getElementById("v2").value);
    var res = document.getElementById("res");
    if (isNaN(e1) || isNaN(e2))
    {
       res.innerHTML = "Operação Inválida"
    }
    else{
        res.innerHTML = "Resposta: " + (e1 * e2);
    }
}
function te_amo() {
    document.getElementById("love").innerHTML = "TE AMO AMOR";
    document.getElementById("love").style.fontFamily = "Chewy";
    document.getElementById("love").style.fontSize = "30px";
    var img = document.createElement("img");
    img.height = 200
    img.width = 200
    img.src = "https://imagepng.org/coracao/coracao-1/";
    document.body.appendChild(img);
}
