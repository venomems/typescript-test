function add(x: number, y: number): number {
    return x + y
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}

interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
    default: string
}

// function position(): MyPosition
// function position(a: number): MyPositionWithDefault
// function position(a: number, b: number): MyPosition
//
// function position(a?: number, b?: number) {
//     if (!a && !b) {
//         return {x: undefined, y: undefined};
//     }
//
//     if (a && !b) {
//         return {x: a, y: undefined, default: a.toString};
//
//
//     return {x: a, y: b}
// }
//
// console.log('Empty - ', position())
// console.log('OneParam - ', position(42))
// console.log('TwoParam - ', position(10, 15))