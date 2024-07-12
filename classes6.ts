class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string)  {
        return `${name}: Typescript: ${this.version}\n`
    }
}

// readonly можно перезаписать только из конструктора
// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4
//
//     constructor(theModel: string) {
//         this.model = theModel
//     }
//
//
// }

class Car {
    readonly numberOfWheels: number = 4

    constructor(readonly model: string) {}
}
// ---------------------------------------------
