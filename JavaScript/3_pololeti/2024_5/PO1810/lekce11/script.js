const seznam = ["Asus", "Apple", "Dell", "Sony", "Samsung", "hp", "Microsoft"]

const seznam_dva = ["dji", "nikon"]

// Spojovani seznamu

const cely_seznam = seznam.concat(seznam_dva)

// Odstraneni prvku uprostred

cely_seznam.splice(5, 2)

// Pridavani prvku uprostred

cely_seznam.splice(3, 0, "Microsoft", "hp")

// For each (prochazeni seznamem)

function funkce(name, index, array) {
    console.log(index + ". " + name)
}

cely_seznam.forEach(funkce)

// for (const element of cely_seznam) {
//     console.log(element)
// }

// Zjednodussovani vnoreneho seznamu

const vnoreny_seznam = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const splacnuty_seznam = vnoreny_seznam.flat()

// Rozdeleni seznamu

const rozdeleny_seznam = cely_seznam.slice(4)
