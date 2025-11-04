
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
