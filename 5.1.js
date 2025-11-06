/*
För att lösa uppgifterna behöver du använda: console.log, .length, forEach, find, filter, map och reduce.

1 Skapa en lista med hjälp av följande kod. Skriv ut:
1a längden på listan,
1b första elementet,
1c sista elementet,
1d femte elementet.
*/
let list = []
for( let i=0; i<20; i++ ) {
    list.push(i + 1)
}
/*
console.log('Längden på listan är: ' + list.length)
console.log('Första elementet är: ', list[0])
console.log('Sista elementet är: ', list[list.length - 1])
console.log('Sista elementet är: ', list.at(-1))
console.log('Femte elementet är: ', list[4])
console.log('Femte elementet är: ', list.at(4))
*/

/*
2 Använd samma lista. Skriv kod som svarar på frågorna:
2a finns det något tal som är större än 15? (skriv ut det om det finns)
2b finns det något tal som är större än 35?
2c skriv ut alla tal mindre än 10.
2d skriv ut alla tal mellan 8 och 12 (inklusive 8 och 12)
*/
//                            function(x) { return x > 15 }
let greaterThan15 = list.find(x => x > 15)
console.log('Större tal: ', greaterThan15)
let greaterThan35 = list.find(x => x > 35)
console.log('Större tal: ', greaterThan35)
