class Circle {
    constructor(polomer) {
        this.polomer = polomer
        this.prumer = 2 * polomer
    }

    obvod() {
        return Math.PI * this.prumer
    }

    obsah() {
        return Math.PI * this.polomer ** 2
    }
}

let kruznice = new Circle(15)

let body = document.querySelector("body")

body.innerHTML += "Polomer kruznice: " + kruznice.polomer + "<br>"
body.innerHTML += "Obvod kruznice: " + kruznice.obvod() + "<br>"
body.innerHTML += "Obsah kruznice: " + kruznice.obsah() + "<br>"