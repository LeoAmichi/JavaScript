const ages = [32, 15, 16, 40]

const result = ages.filter((age) => age >= 18)

const resultado = ages.filter ((age) => {
    return age % 2 == 0
})

console.log(resultado)