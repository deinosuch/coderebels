function naseFunkce() {
    document.write("ahoj")
    console.log("ahoj")
}

function funkceSParametrem(text) {
    document.write(text)
    console.log(text)
}

let arrowFunkce = () => {
    document.write("text uvnitr arrow funkce")
    console.log("text uvnitr arrow funkce")
}

let arrowFunkceSParametrem = (param) => {
    document.write(param)
    console.log(param)

    return 1
}

let cisla = [2, 14, 53, 12]

function secti(list) {
    let total = 0
    for (const element of list) {
        total += element // total = total + element
    }
    return total
}
