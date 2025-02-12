let x, y

x = 124
y = 1/2

let napis = (neco) => document.write("<p>" + neco + "</p>")

console.log(x + y)

napis(x - y)
napis(x * y)

napis(x / y)

napis(x ** y)

// x-ta odmocnina z y = y ^ 1/x

let a = true // true = 1
let b = false // false = 0

if (x <= 12) {
    napis("je to pravda")
} else if (x == 13) {
    napis("neni to pravda")
}

if (x % 2) {
    napis("x je liche")
} else {
    napis("x je sude")
}

napis(x)

x *= 10 // x = x * 10

napis(x)