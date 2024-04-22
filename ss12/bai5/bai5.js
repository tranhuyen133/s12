"use strict";
class Quadrangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class Rectangle extends Quadrangle {
    constructor(width, height) {
        super(width, height);
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Square extends Quadrangle {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    calculatePerimeter() {
        return 4 * this.width;
    }
}
// Tạo thực thể từ lớp Rectangle và gọi phương thức calculatePerimeter
let rectangle = new Rectangle(4, 6);
console.log("Perimeter of rectangle:", rectangle.calculatePerimeter());
// Tạo thực thể từ lớp Square và gọi phương thức calculatePerimeter
let square = new Square(5);
console.log("Perimeter of square:", square.calculatePerimeter());
