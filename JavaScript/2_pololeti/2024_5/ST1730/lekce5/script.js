// for ( ; ; ) {
//     console.log()
// }

// let condition = true

// for (; condition;) {

// }

// while (condition) {
    
// }

// for (let index = 0; index < 20; index += 2) {
//     console.log(index)
// }

// let index = 0
// while(index < 20) {
//     console.log(index)

//     index += 2
// }

// FUNKCE
// co jsme si rikali za funkce: console.log, document.getElementByID, document.write, prompt, alert

function nase_funkce(text) {
    console.log(text)
    document.write(text)
    return true
}

nase_funkce("ahoj neco tady funkce")

let arrow_funkce = (parametr) => {
    console.log("arrow funkce")
    console.log(parametr)
}

function secti(a, b) {
    return a + b
    console.log(a+b)
}

let x = secti(1, 123)

console.log(x)


let seyman = [4, 12, 29]
let prvni_prvek = seyman[0]
let delka_seymanu = seyman.length

for (let index = 0; index < seyman.length; index++) {
    let element = seyman[index];
    
}

for (let cimprcampr = 0; cimprcampr < seyman.length; cimprcampr++) {
    const prvek_seymanu = seyman[cimprcampr];
    
}

function secti_seznam(seznam) { // 4, 12, 29
    return soucet // 45
}