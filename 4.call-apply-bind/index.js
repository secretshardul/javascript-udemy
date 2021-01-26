// this: Refers to the parent object.
const jackObject = {
    name: 'jack',
    sayHello: function () { console.log('hello ' + this.name) },
    saySentence: function (sentence) {
        console.log(this.name + ' says ' + sentence)
    }
}

jackObject.sayHello()
// This outside of an object refers to globalThis
const helloFunction = jackObject.sayHello // globalThis has no name parameter
helloFunction() // hello undefined

const tomObject = {
    name: 'tom'
}

// apply() and call() directly invoke the function with the substituted `thisArg` value
jackObject.sayHello.apply(tomObject) // hello tom
jackObject.sayHello.call(tomObject) // hello tom

// Whereas bind() returns a new function, with a bound thisArg value
const tomSaysHello = jackObject.sayHello.bind(tomObject)
// The bound function must be invoked separately.
tomSaysHello() // hello tom

/** apply() and call() are similar with one difference
 * apply() takes an array of parameters
 * call() takes a list of arguments
 */
jackObject.saySentence.apply(tomObject, ['gg'])
jackObject.saySentence.call(tomObject, 'gg')

// bind() also takes a list of arguments
const tomSaysSentence = jackObject.saySentence.bind(tomObject, 'gg')
tomSaysSentence()