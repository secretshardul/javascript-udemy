// Base class / super class
class Animal {
    name: string
    private petName: string // Not accessable in derived classes
    protected species: string // Accessable in derived classes, not outside

    constructor(name: string) {
        this.name = name
    }

    getFormattedName() {
        console.log('This is ', this.name)
    }
}

// Subclass / derived class
class Cat extends Animal {
    // constructor automatically inherited
    sayMew() {
        console.log('mew')
        this.getFormattedName()

        this.species
    }
}

const cat = new Cat('cat')

// super must be used when extending methods of base class
class Dog extends Animal {
    constructor() {
        super('Dog') // override constructor
    }

    getFormattedName() {
        console.log('Presenting dog')
        super.getFormattedName()
    }
}