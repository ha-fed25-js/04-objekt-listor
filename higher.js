/*
function next(x) {
	return x + 1
}

function higher(callback) {
	let result = callback(10)
	console.log(result)
}
higher( next )
*/

const data = [1, 3, 5, 7, 9]

// 1. Traditionell for-loop
let sum = 0
for( let i=0; i<data.length; i++ ) {
	sum += data[i]
}
console.log(sum)

function myForEach(list, callback) {
	for( let i=0; i<list.length; i++ ) {
		callback( list[i] )
	}
}

// 2-3 Två sätt att använda egen higher order function
sum = 0
myForEach(data, function(item) {
	sum += item
})
console.log(sum)

sum = 0
myForEach(data, item => {
	sum += item
})
console.log(sum)

// 4. Inbyggd higher order function
sum = 0
data.forEach(item => {
	sum += item
})
console.log(sum)


// Scenario: 50 kr rabatt på alla tröjor som kostar över 200 kr. Vilka tröjor får jag rabatt på?
const prices = [
	{ type: 'cardigan', price: 50 },
	{ type: 'polo', price: 100 },
	{ type: 't-shirt blå', price: 225 },  //175
	{ type: 't-shirt randig', price: 300 },  //250
	{ type: 't-shirt med hål', price: 100 }
]
let discounted = prices.filter(sweater => {
	return sweater.price > 200
})
console.log('Det är rabatt på följande tröjor:')
discounted.forEach(sweater => {
	console.log(sweater.type + ' kostar ' + sweater.price + ' kr')
})

// Kompaktare variant:
// prices.filter(sweater => sweater.price > 200).forEach(sweater => console.log(sweater.type))


function myFilter(list, callback) {
	let newList = []
	for( let i=0; i<list.length; i++ ) {
		if( callback(list[i]) ) {
			newList.push( list[i] )
		}
	}
	return newList
}



// Vad ska jag betala för tröjorna?
let toPay = prices.map( sweater => {
	if( sweater.price > 200 ) {
		return sweater.price - 50
	} else {
		return sweater.price
	}
})
toPay.forEach(price => console.log(`Du ska betala ${price} kr.`))

function myMap(list, callback) {
	let newList = []
	for( let i=0; i<list.length; i++ ) {
		newList.push( callback(list[i]) )
	}
	return newList
}


// Finns det någon polo i affären?
let found = prices.find(sweater => sweater.type === 'jeans')
if( found ) {
	console.log('Vi hittade: ', found)
} else {
	console.log('Det fanns inga jeans i tröjaffären!')
}


// Räkna ut summa med reduce
let sumWithReduce = data.reduce( (accumulator, current) => {
	return accumulator + current  // acc. är delsumman
}, 0 )
console.log('Summan med reduce är: ', sumWithReduce)
