// las clases abstractas no se pueden instanciar directamente,
// la finalidad es que funcionen como plantillas
// todos los metodos definidos como abstractos deben ser definidos en las clases derivadas

abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }
    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // ok to create a reference to an abstract type
// department = new Department(); // error: no se puede crear una instancia de una clase abstracta
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
// department.generateReports(); // error: por que le metodo no existe en la clase abstracta
