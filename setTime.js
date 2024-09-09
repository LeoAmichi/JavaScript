const somar = (a, b) => {
    console.log(`${a} + ${b}\nprocessando operação...`);
    setTimeout(() => {
        return console.log(`O resultado dessa porra é ${a + b}`)
    }, 3000)
}

    somar (5,8)