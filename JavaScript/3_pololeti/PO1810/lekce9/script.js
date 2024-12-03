let auta = ["Ferrari", "Skoda", "BMW", "Lexus", "Subaru", "Mercedes"]
console.log(auta)

// Pristupovani k prvku

let druhe_auto = auta[1]
console.log(druhe_auto)

let treti_auta = auta.at(2)
console.log(treti_auta)

// Pridavani a odebirani prvku na konci

auta.push("Honda")

console.log(auta)

let posledni_auto = auta.pop()
console.log(posledni_auto)

console.log(auta)

// Pridavani a odebirani prvku na zacatku

auta.unshift("Lamborghini")
console.log(auta)

let prvni_auto = auta.shift()
console.log(prvni_auto)

console.log(auta)

// Zjistovani indexu prvku

console.log(auta.indexOf("BMW"))

console.log(auta.indexOf("Honda"))

// Serazovani listu

auta.sort()

console.log(auta)

console.log(auta.reverse())

// Vypisovani seznamu

console.log(auta.toString())

console.log(auta.join(" * "))

// Serazovani cisel

let cisla = [1, 5, 234, 756, 23, 812, 0, -12, -53645]

console.log(cisla)

console.log(cisla.sort())

console.log(cisla.sort((a, b) => a - b))

let prvni = {rok: 1945}
let druhy = {rok: 1965}
let treti = {rok: 1985}

let seznam = [druhy, treti, prvni]

console.log(seznam.sort((a, b) => a.rok - b.rok))

// Vnorene listy

let vnorene_listy = [[2, 5], [8, 10]]
