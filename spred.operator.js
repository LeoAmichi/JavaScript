const times = ["Vasco", "Palmeiras"]
const esportes = ["Natação", "Futebol"]

const resultados = [...times, ...esportes]
for(let time of resultados){
    console.log(time)
}

const jogo = {
    Playstation :  "God of War",
    Xbox : "Halo"
}

for(let games in jogo){
    console.log(jogo[games])
}