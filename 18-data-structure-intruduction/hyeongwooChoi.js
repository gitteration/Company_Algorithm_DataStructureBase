class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    makeLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return "YOUR ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }

    addScore(score) {
        this.scores.push(score);
    }
    calculateAverage() {
        let sum = this.scores.reduce(function (a, b) {
            return a - b;
        })
        return sum / this.scores;
    }
    static enrollStudents() {
        return "ENROLLING STUDENTS !"
    }
}

let firstStudent = new Student("Colt", "Steele", 1);
let lastStudent = new Student("Blue", "Steele", 2);

//Class Methods
console.log(Student.enrollStudents([firstStudent, lastStudent]));