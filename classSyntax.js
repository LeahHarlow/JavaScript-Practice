//creating a blueprint to build from

class Student {
  constructor(firstName, lastName, classLevel){
    this.firstName = firstName;
    this.lastName = lastName;
    this.classLevel = classLevel;
    this.tardies = 0;
    this.scores = [];
  }
  //instance methods exist within the class and are called on individual instances
  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}.`
  }
  markAsLate(){
    this.tardies += 1;
    return (this.tardies > 1 ? `${this.firstName} has been late a whopping ${this.tardies} times` : `${this.firstName} has been late ${this.tardies} time`);
  }
  addScore(score){
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage(){
    let sum = this.scores.reduce(function(a,b){return a+b});
    return sum.this.scores.length;
  }
}

//instantiate a new student object with the "new" keyword
let bestStudent = new Student("Zuma", "Swerdlow", "First");
let goodestStudent = new Student("Aria", "McLaren", "First");

// console.log(bestStudent) // Student { firstName: 'Zuma', lastName: 'Swerdlow' }
// console.log(goodestStudent)// Student { firstName: 'Aria', lastName: 'McLaren', classLevel: 'First' }

// console.log(bestStudent.fullName()) //Your full Name is Zuma Swerdlow.

// console.log(bestStudent.markAsLate()) //Zuma has been late 1 time
// console.log(bestStudent.markAsLate()) // Zuma has been late a whopping 2 times


//this is how we measure the distance between points in a cartesian sense
class Point {
  constructer(x,y) {
    this.x = x;
    this.y = y;
  }
  //class methods have the word static before them and cannot be called from the instance but are called from the class. More like a utility function rather than specific to instances. Probably won't really use them.
  static distance(a,b) {
    const dx = a.x - b.y;
    const dy = a.y - b.y;
    return Math.hypot(dx,dy);
  }
}

let p1 = new Point(10,7)

console.log(p1);
