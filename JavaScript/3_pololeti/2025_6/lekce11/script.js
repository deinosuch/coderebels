// Program pro obchod

let produkty = ["jablko", "banany", "hrusky"];
produkty.push("salat"); // prida na konec

// shift = odebira ze zacatku
// pop = odebira z konce
// unshift = pridava na zacatek

// join = spoji prvky seznamy ve string s parameterem
document.writeln(
  "Produkty co mame v nabidce: " + produkty.join(", ") + "</br>",
);

// concat = spoji dva ci vice seznamu dohromady
// !!! musime vysledek ulozit
let dalsi_produkty = ["citrony", "brambory"];
produkty = produkty.concat(dalsi_produkty);

let piti = ["kola", "fanta"];
let sladkosti = ["cokolada", "gumovy medvidci"];

produkty = produkty.concat(piti, sladkosti);

// uplne stejne jako forof (for cyklus)
produkty.forEach((produkt) => {
  document.writeln(produkt + "</br>");
});

kapesniky = {
  nazev: "kapesniky",
  cena: 15,
};

// map = upravi kazdy prvek seznamu a vytvori novy seznam z upravenych prvku
ceny = [10, 123, 1283, 42];
zdvojnasobene_ceny = ceny.map((cena) => cena * 2);

produkty_s_cenami = produkty.map(
  (produkt) =>
    Object({ nazev: produkt, cena: Math.floor(Math.random() * 200) }), // z kazdeho produktu jsme vytvorili objekt s nazvem produktu a cenou produktu
);
console.log(produkty_s_cenami);

// Math.floor(Math.random() * 200)
// Math.random() vytvori nahodne cislo mezi 0 a 1
// * 200 to zvetsi na 0 - 200
// Math.floor() pouze zaokrouhli na cele cislo

produkty_pod_sto = produkty_s_cenami.filter((produkt) => produkt.cena < 100);
console.log(produkty_pod_sto);

// reduce = vezme vsechny prvky v seznamu a zredukuje je do jednoho cisla podle dane funkce
let soucet = produkty_s_cenami.reduce(
  (total, produkt) => total + produkt.cena,
  0, // zacatecni hodnota totalu
);

console.log(
  produkty_s_cenami
    .filter((produkt) => produkt.cena > 100)
    .map((p) => p.nazev)
    .join(", "),
);
