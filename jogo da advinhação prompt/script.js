var facil = document.getElementById("facil");
var medio = document.getElementById("medio");
var dificil = document.getElementById("dificil");
facil.addEventListener("click", function () {
  jogo("facil");
});
medio.addEventListener("click", function () {
  jogo("medio");
});
dificil.addEventListener("click", function () {
  jogo("dificil");
});

function escolherDificuldade(dificuldade) {
  if (dificuldade === "facil") {
    return 5;
  }
  if (dificuldade === "medio") {
    return 3;
  }
  if (dificuldade === "dificil") {
    return 1;
  }
}

function numSecreto() {
return parseInt(Math.random() * 10) + 1;
}

function jogo(dificuldade) {
  let tentativas = 1;
  var tentativasTotal = escolherDificuldade(dificuldade);
  document.getElementById("inicio").addEventListener("click", function () {
    let numeroSecreto = numSecreto();
    while (tentativas <= tentativasTotal) {
      let chute = parseInt(window.prompt("Qual o seu chute?"));
      if (chute < 0 || chute > 10 || isNaN(chute)) {
        window.alert("Digite um número entre 0 e 10");
        continue;
      }
      if (chute === numeroSecreto) {
        window.alert("Parabéns você acertou o número secreto");
        break;
      }
      if (chute < numeroSecreto) {
        if (tentativas === tentativasTotal) {
            window.alert("Você perdeu");
            break;
          }
        window.alert(
          "O número que você chutou é menor que o número secreto"
        );
      }
      if (chute > numeroSecreto) {
        if (tentativas === tentativasTotal) {
            window.alert("Você perdeu");
            break;
          }
        window.alert(
          "O número que você chutou é maior que o número secreto"
        );
      }
      tentativas++;
    }
  });
}
