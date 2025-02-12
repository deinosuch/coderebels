let x = 12

if (x > 12) {
    alert("vetsi")
} else if (x == 12){
    alert("rovna se")
} else {
    alert("mensi")
}

let list = [13, 28, 49]

for(let i = 10; i <= 90; i += 10) {
    console.log(i)
}

for (let index = 0; index < list.length; index++) {
    console.log(list[index])
}

for (let element of list) {
    console.log(element)
}

let a = 0

function loop() {
    a+=1
    if (a != 11){
        console.log(a)
        loop()
    }
}
loop()