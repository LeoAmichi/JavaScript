var ages = [12, 15, 30, 10]

function result(age){
    return age > 18
}
console.log(ages.find(result))

if(result(ages[2]) == true){
    console.log("Que que isso meu filho")
}