var aleatorio = parseInt(Math.random() * 10) + 1;
let tentativas = 0

function sorteio() {
  var x = document.getElementById("test");
  var chuteInput = document.getElementById("chute");
  let chute = parseInt(chuteInput.value);
  if (chute < 0 || chute > 10) {
    x.innerHTML = "Por favor, insira um número entre 1 e 10.";
  }

    if (aleatorio === chute) {
      x.innerHTML = "Parabéns você acertou!!!! \nO número aleatório foi: " + aleatorio;
    } else if (aleatorio < chute) {
      x.innerHTML = "Seu chute é maior que o número sorteado";
    } else {
      x.innerHTML = "Seu chute é menor que o número sorteado";
    }
}

function reloadPage(){
  location.reload()
}
