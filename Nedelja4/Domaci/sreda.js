// 1. Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)
// 	* Име
//     * Врста
//     * Способности (низ способности покемона)
//     * Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))

//     Даље, направити низ од ових објеката

//     ```
//     пикачу:
// 	име: пикачу
//     врста: електрични
//     способности: Статички електрицитет,...
// 	карактеристике: напад: 55, одбрана: 30, брзина: 90
//     ```

let pokemoni = [
  {
    ime: "Pikacu",
    vrsta: "Elektricni",
    sposobnost: "Staticni elektricitet",
    karakteristike: { napad: 55, odbrana: 30, brzina: 90 },
  },
  {
    ime: "Jirachi",
    vrsta: "Celicni",
    sposobnost: "Drazestan sklad",
    karakteristike: { napad: 70, odbrana: 65, brzina: 50 },
  },
  {
    ime: "Umbreon",
    vrsta: "Mracni",
    sposobnost: "Sinhronizacija",
    karakteristike: { napad: 25, odbrana: 80, brzina: 85 },
  },
  {
    ime: "Kakuna",
    vrsta: "Otrovni",
    sposobnost: "Svlacenje koze",
    karakteristike: { napad: 90, odbrana: 50, brzina: 30 },
  },
];

// 2. Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

//     ```
// 	[<...>,...]
//     ```
function sposobnosti() {
  let sposobnostiPokemona = [];
  for (i = 0; i < pokemoni.length; i++) {
    sposobnosti.push(pokemoni[i].sposobnost);
  }
  return sposobnostiPokemona;
}
//console.log(sposobnosti());
// 3. Сортирати покемоне по брзини, растуће.
function sortPoBrzini() {
  let pokemoniPoBrzini = [];
  pokemoni.sort(function (a, b) {
    return a.karakteristike.brzina - b.karakteristike.brzina;
  });
  for (i = 0; i < pokemoni.length; i++) {
    pokemoniPoBrzini.push(pokemoni[i].ime);
  }
  return pokemoniPoBrzini;
}
console.log(sortPoBrzini());

// 4. Направити функцију која прима низ покемона,
// пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.
function sortPoJacini() {
  let pokemoniPoJacini = [];
  pokemoni.sort(function (a, b) {
    return b.karakteristike.napad - a.karakteristike.napad;
  });
  for (i = 0; i < pokemoni.length; i++) {
    pokemoniPoJacini.push(pokemoni[i]);
  }
  return pokemoniPoJacini[0];
}
console.log(sortPoJacini());
// *На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :

// ```
//     <div>
//         <p>Opis pokemona</p>
//         <img src="slika odgovarajućeg pokemona">
//     </div>
// ```

// *На клик на дугме прикажи најјачег покемона приказује покемона који има
// најјачи напад (користити већ написану функцију иѕ 4. задатка) по истом формату.

const prikaziPokemone = document.querySelector("#prikaz");
prikaziPokemone.addEventListener("click", () => {
  for (i = 0; i < pokemoni.length; i++) {
    let pok = document.createElement("div");
    document.body.appendChild(pok);
    pok.innerHTML = `
            <div>
                    <p>${pokemoni[i].ime}</p>
                    <img src="" alt="Slika ${pokemoni[i].ime}">
                 </div>`;
  }
});
const prikaziNajacegPokemona = document.querySelector("#pobednik");
prikaziNajacegPokemona.addEventListener("click", () => {
  let najPok = document.createElement("div");
  document.body.appendChild(najPok);
  najPok.innerHTML = `
        <div>
                <p>${sortPoJacini().ime}</p>
                <img src="" alt="Slika ${sortPoJacini().ime}">
             </div>`;
});



