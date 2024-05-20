function calculo() {
  let nome = window.prompt("Qual o nome do funcionário?");
  let salario = parseInt(window.prompt(`Qual o salário de ${nome}`));
  let porcentagem = parseInt(
    window.prompt(
      `O salário de ${nome} vai ser reajustado em qual porcentagem?`
    )
  );
  var aumento = salario * (porcentagem / 100);
  var final = salario + aumento;
  document.getElementById(
    "recebeu"
  ).innerHTML = `${nome} recebeu um aumento salarial`;
  document.getElementById("salario").innerHTML =
    `O salário atual era R$ ` + salario;
  (document.getElementById(
    "aumento"
  ).innerHTML = `Com um aumento de ${porcentagem}%, o salário vai aumentar R$ ${aumento}, no próximo mês`),
    (document.getElementById(
      "final"
    ).innerHTML = `E a partir daí, ${nome} vai passar a ganhar R$ ${final}`);
}
