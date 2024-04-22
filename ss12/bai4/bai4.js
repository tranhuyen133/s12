"use strict";
class Product {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    printInfo() {
        console.log("Name:", this.name);
        console.log("ID:", this.id);
    }
}
class Electronic extends Product {
    constructor(name, id, brand) {
        super(name, id);
        this.brand = brand;
    }
    printInfo() {
        super.printInfo();
        console.log("Brand:", this.brand);
    }
}
class Book extends Product {
    constructor(name, id, author) {
        super(name, id);
        this.author = author;
    }
    printInfo() {
        super.printInfo();
        console.log("Author:", this.author);
    }
}
// Tạo thực thể từ lớp Electronic và gọi phương thức printInfo
let electronicProduct = new Electronic("Laptop", 1234, "Dell");
electronicProduct.printInfo();
// Tạo thực thể từ lớp Book và gọi phương thức printInfo
let bookProduct = new Book("The Great Gatsby", 5678, "F. Scott Fitzgerald");
bookProduct.printInfo();
