// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!

// Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan jouw functie uit 4e zodat de resultaten daadwerkelijk op de pagina weergegeven worden!

function priceList(tvlist) {
    result.innerHTML = ``
    for (let i = 0; i < tvlist.length; i++) {
        result.innerHTML += `
        <li>${tvlist[i].brand} ${tvlist[i].name} €${tvlist[i].price},-</li>`
    }
}
function ambilightList(tvlist) {
    result.innerHTML = ``
    for (let i = 0; i < tvlist.length; i++) {
        result.innerHTML += `
        <li>${tvlist[i].brand} ${tvlist[i].name} - Met Ambilight</li>`
    }
}
function soldOutList(tvlist) {
    result.innerHTML = ``
    for (let i = 0; i < tvlist.length; i++) {
        result.innerHTML += `
        <li>${tvlist[i].brand} ${tvlist[i].name} - Uitverkocht</li>`
    }
}


const result = document.getElementById('result')

const price= document.getElementById('price')
price.addEventListener('click', () => {
    priceList(inventorySort)
})

const ambilight2 = document.getElementById('ambilight-button')
ambilight2.addEventListener('click', () => {
    ambilightList(ambiLight)
})

const soldout = document.getElementById('soldout-button')
soldout.addEventListener('click', () => {
    soldOutList(soldOut)
})

