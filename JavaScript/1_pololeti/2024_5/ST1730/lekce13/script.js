document.querySelector("p.paragrafsclassou#idparagrafu").innerHTML = "prepsano z javascriptu"

let x,y

x = 10
y = 34

z = "12"

document.write(y + x)
console.log(y + x)

console.log(x++) // to stejne jako log(x) x = x + 1

console.log(++x) // to stejne jako x = x + 1 log(x)

console.log(x)

let odpoved = prompt("Kolik ti je let?")

if (odpoved >= 18) {
    document.write("dobry den")
} else if (odpoved > 0) {
    document.write("cau kamo")
} else {
    alert("neplatny vek")
}

document.getElementById("idparagrafu").innerHTML = (odpoved === "18") ? "je ti 18" : "neni ti 18"

y += 12 // y = y + 12

console.log(y)

y -= 10 // y = y - 10

y *= 3 // y = y * 3

y /= 2 // y = y / 2
