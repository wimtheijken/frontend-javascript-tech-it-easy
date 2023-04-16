// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let totalSold = 0
const sold = inventory.map((item)=>{
    return totalSold += item.sold
})
console.log('Opdracht 2a')
console.log(sold)
console.log(totalSold)


// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

totalSold2 = document.getElementById('opdracht2b')
totalSold2.textContent = totalSold
console.log('Opdracht 2b')
console.log('Zie pagina... -> ' + totalSold)

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let totalBought = 0
const bought = inventory.map((item)=>{
    return totalBought += item.originalStock
})
console.log('Opdracht 2c')
console.log(bought)
console.log(totalBought)

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

totalBought2 = document.getElementById('opdracht2d')
totalBought2.textContent = totalBought
console.log('Opdracht 2d')
console.log('Zie pagina... -> ' + totalBought)

// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

let left
const leftToSell = inventory.map((item)=>{
    return left = totalBought - totalSold
})
leftToSell2 = document.getElementById('opdracht2e')
leftToSell2.textContent = left
console.log('Opdracht 2e')
console.log('Zie pagina... -> ' + left)
