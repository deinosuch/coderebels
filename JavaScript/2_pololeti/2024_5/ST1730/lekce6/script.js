let ind
ind = 12

while (ind == 20) {
    
}

let array = [43, 12, 1089, 15]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}

function secti_seznam(seznam) {
    let soucet = 0
    for (const element of seznam) {
        soucet += element
    }
    return soucet
}

let nadpis = document.getElementById("nadpis")
nadpis.innerHTML = "ahoj"

nadpis.addEventListener("mouseover", () => {
    nadpis.innerHTML += "a"
})

function test() {
    console.log("logging")
}