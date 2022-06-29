//creating a blueprint to build from

class Student {
  constructor(firstName, lastName, classLevel){
    this.firstName = firstName;
    this.lastName = lastName;
    this.classLevel = classLevel;
  }
  //instance methods exist within the class
  fullName(){
    return `Your full Name is ${this.firstName} ${this.lastName}.`
  }
}

//instantiate a new student object with the "new" keyword

let bestStudent = new Student("Zuma", "Swerdlow", "First");
let goodestStudent = new Student("Aria", "McLaren", "First");

//console.log(bestStudent) // Student { firstName: 'Zuma', lastName: 'Swerdlow' }
//console.log(goodestStudent)// Student { firstName: 'Aria', lastName: 'McLaren', classLevel: 'First' }

console.log(bestStudent.fullName()) //Your full Name is Zuma Swerdlow.
