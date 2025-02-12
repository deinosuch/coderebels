let seznam = [ 12, 29384, "a;sadf", true, false, [14, 84] ]

// for (const element of seznam) {  // for of
//     console.log(element)
//     document.writeln(element)
// }

// for (let index = 0; index < seznam.length; index++ (muze byt i index += 2)) {  // for
//     console.log(index)
//     const element = seznam[index];
//     console.log(element)
// }

// for (co se ma stat pred zacatkem; kontrola na zacatku kazdeho cyklu; co se ma stat po kazdem cyklu)

// while (seznam.length != 0) {
//     console.log(seznam.pop())
// }

// prepsani for do while

let index = 0; // muzeme zacinat odkud chceme

while(index < seznam.length) { // jeden cyklus = iterace
    console.log(index)
    let element = seznam[index]
    console.log(element)

    index++
}

for (let index = seznam.length - 1; index >= 0; index--) {
    const element = seznam[index];
    console.log(element)

}

