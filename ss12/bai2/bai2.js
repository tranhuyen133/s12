"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log("Student Name:", this.name);
        console.log("Student ID:", this.id);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log("Teacher Name:", this.name);
        console.log("Subject:", this.subject);
    }
}
// Tạo đối tượng từ lớp Student và gọi phương thức displayInfo
let student = new Student("hong hea in", "S12345");
student.displayInfo();
// Tạo đối tượng từ lớp Teacher và gọi phương thức displayInfo
let teacher = new Teacher("beak huyn woo", "Math");
teacher.displayInfo();
