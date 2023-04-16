// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.

function weergaveName(tvlist) {
    return "" + tvlist.brand + " " + tvlist.type + " - " + tvlist.name + ""
}

console.log('Opdracht 4a')
console.log(weergaveName(inventory[0]))

// Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.

function weergavePrice(tvlist) {
    return `€${tvlist.price},-`
}

console.log('Opdracht 4b')
console.log(weergavePrice(inventory[0]))


// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.


// het lukte mij niet om met "index" rechtstreeks de index in de array aan te duiden ->  "tvlist[index].availableSizes.length"
function weergaveSizes(tvlist, index) {
    let size = ``
    let tot = index + 1
    for (let i = index; i < tot; i++) {
        for (let j = 0; j < tvlist[i].availableSizes.length; j++) {
            size += `${tvlist[i].availableSizes[j]}  inch (${Math.round(tvlist[i].availableSizes[j] * 2.54)} cm)`
            if (j < tvlist[i].availableSizes.length - 1) {
                size += ` | `
            }
        }
    }
    return size
}

console.log("Opdracht 4c")
console.log(weergaveSizes(inventory, 0))


// Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//
// Philips 43PUS6504/12 - 4K TV
// €379,-
// 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

console.log("Opdracht 4d")
console.log(weergaveName(inventory[0]))
console.log(weergavePrice(inventory[0]))
console.log(weergaveSizes(inventory, 0))


// Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.


function weergave(tvlist) {
    const weergavePlek = document.getElementById('opdracht4a')
    for (let i = 0; i < tvlist.length; i++) {
        weergavePlek.innerHTML += `
        <p>${tvlist[i].brand} ${tvlist[i].type} - ${tvlist[i].name}</p>
        <p>€${tvlist[i].price},-</p>`
        for (let j = 0; j < tvlist[i].availableSizes.length; j++) {
            weergavePlek.innerHTML += `<span>${tvlist[i].availableSizes[j]} inch (${Math.round(tvlist[i].availableSizes[j] * 2.54)} cm) </span>`
            if (j < tvlist[i].availableSizes.length - 1) {
                weergavePlek.innerHTML += ` | `
            }
        }
    }
}

console.log('Opdracht 4e-eerste versie')
weergave(inventory)

// ik had de function hierboven al geschreven voor ik goed de opdracht had gelezen ik heb m dus hieronder opnieuw geschreven maar nu volgens de opdracht met herbruikbare functies in opdracht 4a, 4b, 4c, 4d.
function weergave2(tvlist) {
    const weergavePlek2 = document.getElementById('opdracht4b')
    for (let i = 0; i < tvlist.length; i++) {
        weergavePlek2.innerHTML += `
        <p>${weergaveName(inventory[i])}</p>
        <p>${weergavePrice(inventory[i])}</p>
        <p>${weergaveSizes(inventory, i)}</p>
        `
    }
}

console.log('Opdracht 4e-tweede versie')
weergave2(inventory)


