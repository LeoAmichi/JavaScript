const students = [
    { name: `Gigi`, grade: 8 },
    { name: `Jason`, grade: 5 },
    { name: `João`, grade: 3 },
    { name: `Pedro`, grade: 7 },
    { name: `Taty`, grade: 10 },
    { name: `Andre`, grade: 6 }
]

const resultado = students.filter(student => {
    if(student.grade >= 7) {
        return student.name
    }})

    // ouuu

    const result = students.filter (estudante =>  estudante.grade >= 7)

console.log(result)