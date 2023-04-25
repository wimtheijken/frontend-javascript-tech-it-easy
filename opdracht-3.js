
// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

const brands = inventory.map((brand)=>{
    if (brand.brand !== brand) {
        return brand = brand.brand
    }
})
let brands2 = []
let j = 0
const brandList = document.getElementById('opdracht3a')
for (let i = 0; i < brands.length; i++) {
    brands2[0] = brands[0]
    if (brands2[j] !== brands[i]) {
        j++
        brands2[j] =brands[i]
        brandList.innerHTML += `<li>${brands2[j]}</LI>`
    }
}
console.log('Opdracht 3a')
console.log(brands2)

// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!

console.log('Opdracht 3b')
function brandsSelector(tvlist) {
    const brandsb = tvlist.map((brandb)=>{
        if (brandb.brand !== brandb) {
            return brand = brandb.brand
        }
    })
    let brands2b = []
    let j = 0
    const brandListb = document.getElementById('opdracht3b')
    for (let i = 0; i < brandsb.length; i++) {
        brands2b[0] = brandsb[0]
        if (brands2b[j] !== brandsb[i]) {
            j++
            brands2b[j] =brands[i]
            brandListb.innerHTML += `<li>${brands2b[j]}</LI>`
        }
    }
}

brandsSelector(inventory)
