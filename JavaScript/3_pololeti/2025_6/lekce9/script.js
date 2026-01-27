// !! prvky v arrayi se pocitaj od 0
// array se vytvori []
let list = [12, 452, 11234, "sldkfja", "klasdjfl"];
console.log(list);

// Do arraye se pridava na konec pomoci funkce push
list.push(123);
console.log(list);

// pridat na zacatek arraye
list.unshift("zacatek");
console.log(list);

// z arraye se maze bud na zacatku (shift) nebo na konci (pop)
list.shift();
console.log(list);
list.pop();
console.log(list);

// z prostredka arraye se maze pomoci splice, prvni parametr je pozice ze ktere chcem mazat, druhy parametr je kolik chcem vymazat prvku
list.splice(2, 1);
console.log(list);

// indexof funkce zjistuje zda mame nejaky prvek a vrati nam jeho pozici, kdyz prvek nenajde vrati -1
console.log(list.indexOf(452));

list.push("jablka");
if (list.indexOf("jablka") == -1) {
  console.log("jablka nemame");
} else {
  console.log("jablka mame");
}

// sort serazuje seznam
let ovoce = ["jablka", "hrusky", "banany", "meloun"];
ovoce.sort();
console.log(ovoce);

let cisla = [1, 4, 324, 12, 10000000000000000];
cisla.sort();
console.log(cisla);

cisla.sort((a, b) => a - b);
console.log(cisla);
