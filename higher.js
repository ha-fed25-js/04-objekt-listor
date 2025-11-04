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
	{ type: 't-shirt blå', price: 225 },
	{ type: 't-shirt randig', price: 300 },
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
prices.filter(sweater => sweater.price > 200).forEach(sweater => console.log(sweater.type))
