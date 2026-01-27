let hotove_ukoly = document.getElementById("completed")
let celkem_ukoly = document.getElementById("total")

let task_name_input = document.getElementById("task-to-add")
let add_task_button = document.getElementById("button")

let task_container = document.getElementById(".container")

function pridat_ukol(nazev) {
    let novy_ukol = document.getElementById("task-template").cloneNode(true)
    novy_ukol.querySelector("p").innerHTML = nazev
    task_container.appendChild(novy_ukol)
}
