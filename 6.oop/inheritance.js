class Car {
    // let year = 2020; // Scoped to object only. Causes formatting issue though
    #privateSpeed // Set private property using #

    constructor(company, model) {
        this.company = company // these have global scope
        this.model = model
        this.#privateSpeed = 30
    }
    describe () {
        console.log(this.company + ' ' + this.model)
    }

    // Not working
    #privateMethod () {
        console.log('You cant see me')
    }
}

const myCar = new Car('Mahindra', 'XUV')

console.log('Car name', myCar.company)
myCar.describe()
// console.log('Speed', myCar.#privateSpeed)

// myCar["__#7910@#privateMethod"]
