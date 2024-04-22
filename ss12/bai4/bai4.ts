class Product {
    protected name: string;
    protected id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    printInfo(): void {
        console.log("Name:", this.name);
        console.log("ID:", this.id);
    }
}

class Electronic extends Product {
    private brand: string;

    constructor(name: string, id: number, brand: string) {
        super(name, id);
        this.brand = brand;
    }

    printInfo(): void {
        super.printInfo();
        console.log("Brand:", this.brand);
    }
}

class Book extends Product {
    private author: string;

    constructor(name: string, id: number, author: string) {
        super(name, id);
        this.author = author;
    }

    printInfo(): void {
        super.printInfo();
        console.log("Author:", this.author);
    }
}

// Tạo thực thể từ lớp Electronic và gọi phương thức printInfo
let electronicProduct: Electronic = new Electronic("Laptop", 1234, "Dell");
electronicProduct.printInfo();

// Tạo thực thể từ lớp Book và gọi phương thức printInfo
let bookProduct: Book = new Book("The Great Gatsby", 5678, "F. Scott Fitzgerald");
bookProduct.printInfo();