const numbers = [1, 2, 3, 4, 5]

console.log('---------map()------------')
// 1. map(): transform array into another array, by applying function on each item
// get array of squares
const squares = numbers.map((value, index) => value * value)
console.log('Squares array', squares)

// Get array of numbers multiplied by their indices
const numMultipliedByIndex = numbers.map((value, index) => value * index)

console.log('---------filter()------------')
// 2. filter(): Return new array, where each element matches condition
const even = numbers.filter((value) => value % 2 === 0)
console.log('Even numbers', even)

console.log('---------reduce()------------')

const reduced = numbers.reduce((previousVal, currentVal, index) => previousVal + currentVal)
console.log('Array sum', reduced)