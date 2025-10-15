let userArray = []
const input = document.querySelector("input")
const orderedList = document.querySelector("ol")

function updateArray() {
    let inside = ""
    for (const element of userArray) {
        inside += "<li>" + element + "</li>"
    }
    orderedList.innerHTML = inside
}

function addToStart() {
    userArray.unshift(input.value)
    updateArray()
}

function addToEnd() {
    userArray.push(input.value)
    updateArray()
}

function sort() {
    userArray.sort()
    updateArray()
}

function removeLast() {
    userArray.pop()
    updateArray()
}

function removeFirst() {
    userArray.shift()
    updateArray()
}