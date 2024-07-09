// Data types

// number and string
const message: string = 'Hello, Typescript';
const num: number = 2;

// arrays
const numberArr: number[] = [1, 2, 3];
const numBar: Array<number> = [1, 2, 3];
const stringArr: string[] = ['alex', 'batty'];

// Tuple
const contact: [string, number] = ['Alexandr', 123456];

// Any
// можно менять тип
let variable: any = 42;
variable = 'new string';
variable = [];

// // // // function
function sayMyName(name: string): void {
    console.log(name);
}

sayMyName('Alex');

// Never
function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while (true){

    }
}

// Type создать свой тип
type Login = string;
const login: Login = 'admin';

// СОЗДАТЬ ТИП И ДЛЯ СТРИНГ И ДЛЯ НАМБЕР
type ID = string | number;
const id1: ID = 123;
const id2: ID = '123';