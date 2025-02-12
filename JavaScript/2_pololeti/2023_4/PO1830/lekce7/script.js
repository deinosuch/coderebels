
let sirka = 294

let kvadr = {
    vyska : 10,
    sirka : 20,
    delka : 30,

    obsah_podstavy() {
        return this.delka*this.sirka
    },

    objem() {
        return this.obsah_podstavy()*this.vyska
    },

    vypis_vlastnosti() {
        for (const key in kvadr) {
            if(typeof(kvadr[key]) === "function") {
                document.querySelector("body").innerHTML += key + ":" + kvadr[key]() + "<br>";
                continue
            }

            document.querySelector("body").innerHTML += key + ":" + kvadr[key] + "<br>";
        }
    }
}

// let kvadr2 = { TAKHLE NE!
//     vyska : 40,
//     sirka : 70,
//     delka : 30,
//     obsahpodstavy() {
//         return this.delka*this.sirka
//     },

//     objem() {
//         return this.obsah()*this.vyska
//     }
// }

function vytvorKvadr(vyska, sirka, delka) {
    return {
        vyska: vyska,
        sirka: sirka,
        delka: delka,

            obsah_podstavy() {
                return this.delka * this.sirka
            },

            obsah() {
                return 2 * (this.delka * this.sirka + this.delka * this.vyska + this.vyska * this.sirka)
            },

            objem() {
                return this.obsah_podstavy() * this.vyska
            }

    }
}

function vypis_vlastnosti(kvadr) {
    for (let key in kvadr) {
        if (typeof (kvadr[key]) === "function") {
            document.querySelector("body").innerHTML += key + ":" + kvadr[key]() + "<br>";
            continue
        }

        document.querySelector("body").innerHTML += key + ":" + kvadr[key] + "<br>";
    }
}

let kvadr2 = vytvorKvadr(1000, 50000, 1000000)
let kvadr3 = vytvorKvadr(1, 1, 1)

vypis_vlastnosti(kvadr2)
vypis_vlastnosti(kvadr3)

document.querySelector("body").innerHTML += "<br>";

class Kvadr {
    constructor(vyska, sirka, delka) {
        this.vyska = vyska
        this.sirka = sirka
        this.delka = delka
    }

    obsah_podstavy() {
        return this.delka * this.sirka
    }

    povrch() {
        return 2 * (this.delka * this.sirka + this.delka * this.vyska + this.vyska * this.sirka)
    }

    objem() {
        return this.obsah_podstavy() * this.vyska
    }
}

let kvadr4 = new Kvadr(10, 10, 10)
let kvadr5 = new Kvadr(10, 20, 30)

vypis_vlastnosti(kvadr4)
vypis_vlastnosti(kvadr5)
