let x = 20
let y = 20

if (x == 20) {
    console.log('v ifu')
} else {
    console.log('v elsu')
}

while (x != y) { // >, <, <=, >=, true, ==
    // x--
    // y++ // postinkrementace
    // ++y // preinkrementace
    console.log(--x)
    console.log(++y)
}

do {
    console.log(--x)
    console.log(++y)
} while (x == y);


for (let index = 1; index < 20; index += 2) {
    console.log(index)
}

let list = ["adam", "christian", "skibidi", "jerry", "toilet", "mira"]

for (const element of list) {
    console.log(element)
}

for (let index = 0; index < list.length; index++) {
    const element = list[index];
    console.log(element)
}
