function Animal () {
    this.name = 'cat'
    this.weight = 20
}

// Prototype chain
console.log('Animal', Animal)
console.log('Animal prototype', Animal.prototype) // animal {} object is the protype of animal() function
console.log('Animal prototype 2x', Animal.prototype.prototype) // chain always ends in undefined

// Almost everything in javascript is an object. Eg. functions
// Exceptions- null , undefined , strings, numbers, boolean, and symbols
const num = 4
console.log('Prototype of number', num.prototype) // undefined

const myAnimal = new Animal()
console.log('my animal', myAnimal)
console.log('my animal prototype', myAnimal.prototype)
myAnimal.speed = 4 // Regular way of adding new attribute to object

// Prototypes allow us to add variables and functions to pre-defined objects
Animal.prototype.speed = 20
const speedyAnimal = new Animal()
console.log('Speedy animal', speedyAnimal)
// If attribute is not found on object, its prototype is checked
console.log('Speed of speedy animal', speedyAnimal.speed)


// Use case: add new function to an existing class
Date.prototype.newFunction = function () {
    console.log('hello world')
}

Date.prototype.addDays = function (days) {
    const newDate = new Date(this.valueOf())
    newDate.setDate(this.getDate() + days)
    return newDate
}
const myDate = new Date()

myDate.newFunction()