let list = [2, 2, 9, 29, 8]

function reduceFunkce(total, value) {
    console.log(total)
    return total - value
}

document.write(list.reduce(reduceFunkce, 0))

let vysledek

fetch("https://6797c48dc2c861de0c6ded19.mockapi.io/users")
.then(response => response.json())
.then(data => document.write(data[0]["name"]))
