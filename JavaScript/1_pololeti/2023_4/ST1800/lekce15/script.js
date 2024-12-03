function precti() {
    let odpoved = document.querySelector("input").value
    document.getElementById("odpoved").innerText = odpoved

    let nadpisy = document.getElementsByTagName("h1")
    for (const item of nadpisy) {
        item.style.backgroundColor = "rgb(88, 180, 174)"
        item.style.fontSize = "100px"
    }
}

let seznam = [96, 15, 289, 52]
console.log(seznam)

// for (let index = 0; index < seznam.length; index++) {
//     const element = seznam[index];
//     console.log("Element: ")
//     console.log(element)

//     console.log("Index: ")
//     console.log(index)
// }


// let index = 0
// while (index < seznam.length) {
//     console.log(seznam[index])

//     index += 1
// }

let cislo = 0
document.querySelector("p").innerText = cislo

function pridej() {
    cislo++
    document.querySelector("p").innerText = cislo
}