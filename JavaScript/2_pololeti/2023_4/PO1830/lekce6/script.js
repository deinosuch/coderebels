let znacky = ["Lenovo", "Apple", "HP", "Sony"]
let seznam = document.querySelector("ul")
for(let znacka of znacky) {
    let element = document.createElement("li")
    element.innerHTML = znacka;
    seznam.appendChild(element);
}

let auto = {
    znacka: "BMW",
    horsePower: 1554,
    rok: 2020
}

let body = document.querySelector("body")

body.innerHTML += "znacka auta: " + auto.znacka + "<br>"
body.innerHTML += "kone auta: " + auto["horsePower"] + "<br>"
body.innerHTML += "rok auta: " + auto.rok + "<br>"

body.innerHTML += auto + "<br>"

for (let key in auto) {
    body.innerHTML += key + ": " + auto[key] + "<br>";
}

let vyska = 10;
let sirka = 20;

let obdelnik = {
    vyska: 2345234565,
    sirka: 34523455610,
    obsah() {
        return this.vyska * this.sirka;
    }
}

body.innerHTML += "Obsah obdelniku " + obdelnik.vyska + " krat " + obdelnik.sirka + ": " + obdelnik.obsah()

let object = {
    key: "value",
    klíč: "hodnota"
}