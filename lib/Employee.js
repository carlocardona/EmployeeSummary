// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`Name: ${name}`);
    }
    getID() {
        console.log(`Employee ID: ${id}`);
    }
    getEmail() {
        console.log(`Employee Email: ${email}`);
    }
    getRole() {
        return Employee; //is this right?
    }
}

module.exports = Employee;
