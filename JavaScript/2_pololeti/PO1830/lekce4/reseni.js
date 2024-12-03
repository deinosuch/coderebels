let vysledek = 0;
for(let i = 1; i <= 100; i++) {
    vysledek += i;
}

document.querySelector("body").innerHTML += vysledek;

let tlacitko = document.getElementById("tlacitko");

tlacitko.addEventListener("click", () => {
    let element = document.createElement("button")
    element.innerHTML = "Vytvorene tlacitko"
    document.querySelector("body").appendChild(element);
})

// let fontsize = 16;
// let text = document.querySelector("p");
// text.style.fontSize = fontsize + "px";

// tlacitko.addEventListener("click", () => {
//     fontsize++;
//     text.style.fontSize = fontsize + "px";
// })
