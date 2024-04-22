"use strict";
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    calculateSalary() {
        return 0;
    }
}
class InternEmployee extends Employee {
    constructor(name, role, workHour) {
        super(name, role);
        this.workHour = workHour;
    }
    calculateSalary() {
        return 30000 * this.workHour;
    }
}
class OfficialEmployee extends Employee {
    constructor(name, role, overtimeWage) {
        super(name, role);
        this.overtimeWage = overtimeWage;
    }
    calculateSalary() {
        return 20000000 + this.overtimeWage;
    }
}
// Tạo đối tượng từ lớp InternEmployee và tính lương
let internEmployee = new InternEmployee("AAA", "Intern", 40);
console.log("Salary of intern employee:", internEmployee.calculateSalary());
// Tạo đối tượng từ lớp OfficialEmployee và tính lương
let officialEmployee = new OfficialEmployee("bbb", "Official", 5000000);
console.log("Salary of official employee:", officialEmployee.calculateSalary());
