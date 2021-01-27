// Use private in typescript
class TsCar {
    private speed: number
    company: string
    model: string

    constructor(company: string, model: string) {
        this.company = company // these have global scope
        this.model = model
        this.speed = 30
    }
    describe() {
        console.log(this.company + ' ' + this.model)
    }

    private myPrivateMethod() {
        console.log('You cant see me')
    }


}