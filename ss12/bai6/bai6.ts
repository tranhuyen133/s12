class Employee {
    protected name: string;
    protected role: string;

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }

    calculateSalary(): number {
        return 0; 
}
}

class InternEmployee extends Employee {
    private workHour: number;

    constructor(name: string, role: string, workHour: number) {
        super(name, role);
        this.workHour = workHour;
    }

    calculateSalary(): number {
        return 30000 * this.workHour;
    }
}

class OfficialEmployee extends Employee {
    private overtimeWage: number;

    constructor(name: string, role: string, overtimeWage: number) {
        super(name, role);
        this.overtimeWage = overtimeWage;
    }

    calculateSalary(): number {
        return 20000000 + this.overtimeWage;
    }
}

// Tạo đối tượng từ lớp InternEmployee và tính lương
let internEmployee: InternEmployee = new InternEmployee("AAA", "Intern", 40);
console.log("Salary of intern employee:", internEmployee.calculateSalary());

// Tạo đối tượng từ lớp OfficialEmployee và tính lương
let officialEmployee: OfficialEmployee = new OfficialEmployee("bbb", "Official", 5000000);
console.log("Salary of official employee:", officialEmployee.calculateSalary());
