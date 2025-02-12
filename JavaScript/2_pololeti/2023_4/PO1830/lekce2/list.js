let list = ["Jan", "Marek", "Vojta", "Mikael", "Jakub", "Adam"]

for(let element of list) {
    document.querySelector("body").innerHTML += "<p>" + element + "</p>";
}