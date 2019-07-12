const {map, filter, find, head, reverse, tail, sort, findLast} = require('./index.js')

let myArray = [6, 17, 3, 3, 92, 27, 11, 88];

//map each number and add 2
console.log(map(myArray, x => x + 2));
//output: [ 8, 19, 5, 5, 94, 29, 13, 90 ]


//filter out numbers that are even
console.log(filter(myArray, x => x % 2 === 0));
//output: [ 6, 92, 88 ]


//find anything greater than 90
console.log(find(myArray, x => x > 90));
//output: 92

//findLast
console.log(findLast(myArray));
//output: 88

//head
console.log(head(myArray));
//output: 6

//reverse
console.log(reverse(myArray));
//output: [ 88, 11, 27, 92, 3, 3, 17 ]

//tail - add all except first item
console.log(tail(myArray))
//output: [ 17, 3, 3, 92, 27, 11, 88 ]

//sort
console.log(sort(myArray))
//output:[ 3, 3, 6, 11, 17, 27, 88, 92 ]

