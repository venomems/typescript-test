interface Rect {
    readonly id: string;
    color?: string;
    size: {
        width: number;
        height: number;
    }
}

const rect1: Rect = {
    id: '123',
    size: {
        width: 40,
        height: 20,
    },
    color: 'ccc'
}

const rect3 = {} as Rect

interface RectWithArea  extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '122',
    size: {
        width: 30,
        height: 30,
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();

    setTime(date: Date) {
        this.time = date;
    }
}

// когда много ключей
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    borderRadius: '12px'
}
