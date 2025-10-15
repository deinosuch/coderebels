let x = 10

function power(number, power_of) {
	let first_number = 1

	for (let index = 0; index < power_of; index++) {
		first_number *= number
		// to stejne jako:
		// first_number = first_number * number
	}

	return first_number
}

while (x >= 0) {
	console.log(x)
	x--
}

let objekt = {
	jmeno: "Adam",
	vek: 22
}

let num = document.getElementById("num")
let but = document.getElementById("add_button")

num.innerHTML = localStorage.getItem("num")

but.addEventListener("mouseover", () => {
	let cislo = num.innerHTML
	cislo++
	localStorage.setItem("num", cislo)
	num.innerHTML = cislo
})
