abstract class Quadrangle {
    protected width: number;
    protected height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    abstract calculatePerimeter(): number;
}

class Rectangle extends Quadrangle {
    constructor(width: number, height: number) {
        super(width, height);
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Square extends Quadrangle {
    constructor(sideLength: number) {
        super(sideLength, sideLength);
    }

    calculatePerimeter(): number {
        return 4 * this.width;
    }
}

// Tạo thực thể từ lớp Rectangle và gọi phương thức calculatePerimeter
let rectangle: Rectangle = new Rectangle(4, 6);
console.log("Perimeter of rectangle:", rectangle.calculatePerimeter());

// Tạo thực thể từ lớp Square và gọi phương thức calculatePerimeter
let square: Square = new Square(5);
console.log("Perimeter of square:", square.calculatePerimeter());