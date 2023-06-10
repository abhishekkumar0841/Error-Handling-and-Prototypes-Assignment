function Student(name){
    this.name = name;
}

Student.prototype.printDetails = function(){
    console.log(`Hello, the student is ${this.name}.`);
}

const mithun = new Student("Mithun");
mithun.printDetails();