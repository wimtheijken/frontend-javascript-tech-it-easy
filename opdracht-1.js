// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

const tvNames = inventory.map((item)=>{
    return item.name
})
console.log('Opdracht 1a')
console.log(tvNames)

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

const soldOut = inventory.filter((item)=>{
    // return item.originalStock - item.sold < 1
    return item.originalStock === item.sold
})
console.log('Opdracht 1b')
console.log(soldOut)

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

const  ambiLight = inventory.filter((item)=>{
    return item.options.ambiLight
})
console.log('Opdracht 1c')
console.log(ambiLight)

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

const inventorySort = inventory.map( x => x )
inventorySort.sort((a, b) => b.price - a.price)
console.log('Opdracht 1d')
console.log('Orgineel')
console.log(inventory)
console.log('Gesorteert')
console.log(inventorySort)