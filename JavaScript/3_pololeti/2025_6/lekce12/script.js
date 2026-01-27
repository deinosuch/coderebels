let tridnice = ["Adam Paseka", "Jeronym Miksik"];

// Pridat 3 zaky
// 1 Odebrat
// Vypsat vsechny do konzole

tridnice.push("Danik Sevcik");
tridnice.unshift("Teo Bukovcan");
tridnice.push("Spatne Jmeno");
tridnice.pop();

console.log(tridnice);

// Vytvorit novy seznam zaku
// Spojit nase dva seznamy - funkce concat
// Vypsat jmena na stranku, kazde jmeno na novy radek (!! nechci foreach) - funkce join

let studenti = ["Jan Novak", "Muhammed Ali"];

let nova_tridnice = tridnice.concat(studenti);
document.writeln(nova_tridnice.join("</br>"));

// Kazdy prvek v seznamu vypsat po jednom do console pomoci foreach

nova_tridnice.forEach((student) => {
  console.log(student);
});

// Z tridnice jmen udelejte tridnici objektu, ve kterych je jmeno a prumer zaka (prumer je nahodne cislo)

let zaci_znamky = nova_tridnice.map((student) =>
  Object({ jmeno: student, znamka: Math.floor(Math.random() * 5) + 1 }),
);

console.log(zaci_znamky);

// Vyjmout zaky, kteri dostali za 5

let zaci_prospeli = zaci_znamky.filter((zak) => zak.znamka != 5);
console.log(zaci_prospeli);
