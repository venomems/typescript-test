const arrayOfNum: Array<number> = [1, 2, 3, 4, 5];
const arrayOfString: Array<string> = ['Hello', 'world'];

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfString);
reverse(arrayOfNum);