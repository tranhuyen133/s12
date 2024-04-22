abstract class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract displayInfo(): void;
}

class Student extends Person {
    private id: string;

    constructor(name: string, id: string) {
        super(name);
        this.id = id;
    }

    displayInfo(): void {
        console.log("Student Name:", this.name);
        console.log("Student ID:", this.id);
    }
}

class Teacher extends Person {
    private subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    displayInfo(): void {
        console.log("Teacher Name:", this.name);
        console.log("Subject:", this.subject);
    }
}

// Tạo đối tượng từ lớp Student và gọi phương thức displayInfo
let student: Student = new Student("hong hea in", "S12345");
student.displayInfo();

// Tạo đối tượng từ lớp Teacher và gọi phương thức displayInfo
let teacher: Teacher = new Teacher("beak huyn woo", "Math");
teacher.displayInfo();
