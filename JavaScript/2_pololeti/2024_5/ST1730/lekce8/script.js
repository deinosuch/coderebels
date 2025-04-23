let tlacitko = document.getElementById("tlacitko")

let seznam_barev = ['#ff0000', '#00ff00', '#0000ff', '#ffffff', '#000000', '#ff00dd']
let index = 0

tlacitko.addEventListener("click", () => {
	let pozadi = document.querySelector("body")
	pozadi.style.backgroundColor = seznam_barev[index]
	index++
	index %= seznam_barev.length
})
