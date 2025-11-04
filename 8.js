
// 8b
let list = [10, 20, 30]
let sum = 0
for( let i=0; i<list.length; i++ ) {
    sum += list[i]
}
console.log('Summan är: ', sum)

// 8c Skriv kod med en for-loop som går igenom en lista med tal och skriver ut ett meddelande med console.log om listan innehåller talet 100.
const list2 = [32, 64, 100, 128, 256]
let found100 = false
for( let i = 0; i < list2.length; i++ ) {
	console.log('* ' + list2[i])
	if( list2[i] === 100 ) {
		console.log('-- hittade talet 100!!')
	}

	if( list2[i] === 100 ) {
		found100 = true
	}
}
if( found100 ) {
	console.log('Hittade 100')
}
console.log('')


// 8d Räkna ut summa, största värdet, minsta värdet och medelvärdet för talen i listan.
const xs = [-25, 149,  54, -21, -17, 161, -14, 0, 245, 231, 260, 216, 127,
  134]

//   Hitta största värdet i listan:
// 1. Spara första värdet i listan i en variabel - det är störst hittills
// 2. Titta på varje värde i listan
// 3. Om det är större, uppdatera variabeln
let largestSoFar = xs[0]
let sumSoFar = xs[0]
for( let index=1; index<xs.length; index++ ) {
	let maybeGreater = xs[index]
	if( maybeGreater > largestSoFar ) {
		largestSoFar = maybeGreater
	}

	sumSoFar += xs[index]
}
let average = sumSoFar / xs.length
console.log('Största talet i listan är: ' + largestSoFar)
console.log('Summan är: ' + sumSoFar)
console.log('Medelvärdet är: ' + average)
