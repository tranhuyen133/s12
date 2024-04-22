// Trong TypeScript, cả abstract class và class đều là cách để định nghĩa các đối tượng có tính chất và hành vi riêng biệt. 
// Tuy nhiên, chúng có một số điểm khác biệt quan trọng:

// 1. **Abstract class (lớp trừu tượng)**:
//    - Là một lớp mà không thể tạo đối tượng trực tiếp từ nó. 
//    - Có thể chứa các phương thức abstract hoặc không abstract.
//    - Các phương thức abstract không có thân hàm, chỉ có định nghĩa phương thức mà không cung cấp triển khai cụ thể.
//    - Có thể chứa các thuộc tính và phương thức không abstract.

// Ví dụ minh họa về abstract class:

abstract class Shape {
    protected color: string;

    constructor(color: string) {
        this.color = color;
    }

    abstract calculateArea(): number;
}

class Circle extends Shape {
    private radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

let circle = new Circle("red", 5);
console.log("Area of circle:", circle.calculateArea()); // Area of circle: 78.53981633974483


// 2. Class (lớp)
//    - Là một lớp có thể được sử dụng để tạo ra đối tượng.
//    - Có thể chứa cả thuộc tính và phương thức.
//    - Phải cung cấp triển khai cho tất cả các phương thức được khai báo trong lớp.

// Ví dụ minh họa về class:


class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    makeSound(): void {
        console.log("Dog barks");
    }
}

let dog = new Dog("Buddy", "Labrador");
console.log("Dog's name:", dog.name); // Dog's name: Buddy
dog.makeSound(); // Dog barks


Khi sử dụng:
- Sử dụng abstract class khi bạn muốn xây dựng một lớp cơ sở mà bạn không muốn tạo đối tượng trực tiếp từ đó, 
hoặc khi bạn muốn có một số phương thức mà các lớp con phải triển khai.
- Sử dụng class khi bạn muốn tạo đối tượng cụ thể từ nó và muốn triển khai toàn bộ các phương thức trong lớp đó.