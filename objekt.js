// Objekt har egenskaper (property)
const hogwartz = {
	buildingType: 'school',
	studentCount: 473
}

console.log('Detta finns i objektet:')
for( let property in hogwartz ) {
	console.log(`- ${property} === ${hogwartz[property]}`)
	// console.log('- ' + property + ' === ' + hogwartz[property])
}
