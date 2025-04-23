// let x = 5
// while (x < 30) {
// 	console.log(x)
// 	x += 4 // x = x + 4
// }
//
// for (let y = 5; y < 30; y += 4) {
// 	console.log(y)
// }

function nase_funkce(cislo) {
	console.log(cislo)
	return 10 * cislo
}

let z = nase_funkce(5)
console.log(z)

let nadpis = document.getElementById("nadpis")
nadpis.addEventListener("click", () => {
	alert("smrdis")
})
