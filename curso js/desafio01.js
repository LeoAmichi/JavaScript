// se o aluno tirar uma nota maior que 7 ele está aprovado
// se um aluno tirar uma nota entre 5 e 6 está em recuperação
// se um aluno tirar uma nota menor que 4 ele está reprovado

var nota = 4

if (nota > 7){
    console.log("Aprovado")
}
else if(nota >= 5 && nota <= 6){
    console.log("Recuperação")
}
else{
    console.log("Reprovado")
}