// criar uma função para calcular o IMC
// formula é peso / (altura * altura)

function valor(Valorpeso, valorAltura) {
  const peso = Valorpeso
  const altura = valorAltura
  const imc = peso / (altura * altura);
  console.log(`Seu imc é ${imc}`);
}
valor(80, 1.60);
