// let i = 64

// while (i > 5) {
//     document.write(i + ' ')
//     i /= 2
// }

for(let i = 64; i > 5; i /= 2) document.write(i + ' ')


// let index = 0
for (let index = 0; index < 10; index++) {
    // index < 10
    document.write(index + '\n')
    index += 20
    document.write(index + '\n')
    // index++
}

let seznam = [5, 123, 83, 12]

for (const number of seznam) {
    document.write(number + ' ')
}


let vysledek = 0

for (const number of seznam) {
    vysledek += number
}

document.write(vysledek)
