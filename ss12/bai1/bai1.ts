abstract class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract makeNoise(): void;

    printName(): void {
        console.log("Name:", this.name);
    }
}

class Cat extends Animal {
    makeNoise(): void {
        console.log("meo meo");
    }
}

class Dog extends Animal {
    makeNoise(): void {
        console.log("gâu gâu");
    }
}

// Tạo đối tượng từ lớp Cat và gọi phương thức printName và makeNoise
let cat: Cat = new Cat("Auau");
cat.printName();
cat.makeNoise();

// Tạo đối tượng từ lớp Dog và gọi phương thức printName và makeNoise
let dog: Dog = new Dog("Meomeo");
dog.printName();
dog.makeNoise();