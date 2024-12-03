let zmackni = () => {
    document.querySelector("p").innerHTML += "tlacitko zmacknuto ";
}

document.querySelector("button").addEventListener("click", zmackni)

let funkceSViceParametry = (a, b, c, d, e, f) => {
    return (a + b + c - d - e) * f;
}

let listStudentu = document.querySelector("ul")

let pridat = document.createElement("li");
pridat.innerHTML = "Jenda";
listStudentu.appendChild(pridat);


let body = document.querySelector("body");
let ulAut = document.createElement("ul");
body.appendChild(ulAut);
let seznamZnacek = ["Ford", "Ferrari", "BMW", "Subaru", "Skoda"];

for (let znacka of seznamZnacek) {
    let element = document.createElement("li")
    element.innerHTML = znacka;
    ulAut.appendChild(element);
}
