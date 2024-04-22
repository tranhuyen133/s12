"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("Name:", this.name);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("gâu gâu");
    }
}
// Tạo đối tượng từ lớp Cat và gọi phương thức printName và makeNoise
let cat = new Cat("Auau");
cat.printName();
cat.makeNoise();
// Tạo đối tượng từ lớp Dog và gọi phương thức printName và makeNoise
let dog = new Dog("Meomeo");
dog.printName();
dog.makeNoise();
